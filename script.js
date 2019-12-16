/*
let side;
const url = "https://katjsoeg.dk/kea/2_sem_eksamen/designwp/wordpress/wp-json/wp/v2/pages/";

document.addEventListener("DOMContentLoaded", start);

function start() {
    hentJson();

}

async function hentJson() {
    const response = await fetch(url);
    side = await response.json();
    vis();
}

function vis() {
    document.querySelector("navn").textcontent = side.title.rendered;
    document.querySelector("navn").innerHTML = side.content.rendered;
}
*/


function burgerMenu() {
    var burger = document.getElementById("myTopnav");
    if (burger.className === "topnav") {
        burger.className += " responsive";
    } else {
        burger.className = "topnav";
    }
}


  //der hvor produkterne fra json-filen lægges
        let paintings;
        const temp = document.querySelector(".template_img");
        //vi tilkalder den tomme liste som skal fyldes ud med produkter
        const listeMakeup = document.querySelector(".liste");
        const theTemplatePointer = document.querySelector("#theTemplate");
        //alle produkter vises til at starte med
        let filter = "alle";

        //Når DOM er indlæst, kan siden gå i gang
        document.addEventListener("DOMContentLoaded", getJson);

        //når der klikkes på burger menuen, går den ned til funktionen openNav
        document.querySelector("#menu").addEventListener("click", openNav);

        async function getJson() {
            //json files læses og hentes og produkterne lægges i den tomme "let makeup;"
            let jsonData = await fetch("https://spreadsheets.google.com/feeds/list/14LiOhKxoK7RxtfsWL1sBrwbQIlCGx_ndJECwkmjlrBo/od6/public/values?alt=json");
            console.log("jsonData", jsonData);
            //vi kalder på makeup, det tomme array, og kalder på den første function "start()"
            makeup = await jsonData.json();
            console.log("makeup", makeup);
            addEventListenersToButtons();
            start();
        }


        function start() {
            //Listen med makeup nulstilles
            listeMakeup.innerHTML = "";

            //Her gennemgåes hvert makeup produkt, og der tilføjes en article for hvert produkt der hentes.
            makeup.feed.entry.forEach((makeup) => {
                if (filter == "alle" || filter == makeup.gsx$kategori.$t) {
                    const klon = temp.cloneNode(true).content;
                    //Her tilføjes de informationer der skal være i article, og bliver tildelt en klasse, et tag osv.
                    klon.querySelector("h2").textContent = makeup.gsx$mærke.$t;
                    klon.querySelector("h3").textContent = makeup.gsx$navn.$t;
                    klon.querySelector(".pris").textContent = `${makeup.gsx$pris.$t},-`;
                    klon.querySelector("img").src = `billeder/${makeup.gsx$billede.$t}.jpg`;

                    //Listen/Alt dataen bliver klonet til pop up siden
                    listeMakeup.appendChild(klon);
                    //Når der klikkes på et produkt, går den ned til funktionen visSingle(makeup)
                    listeMakeup.lastElementChild.addEventListener("click", () => {
                        visSingle(makeup);
                    });
                }
            })
        }

        function visSingle(makeup) {
            //pop up vinduet vises
            document.querySelector("#popup").style.display = "block";
            //når der trykkes på .luk, lukkes vinduet
            document.querySelector("#popup .luk").addEventListener("click", lukSingle);

            //her tilføjes de informationer der skal være i .indhold
            document.querySelector(".menu h2").textContent = makeup.gsx$mærke.$t;
            document.querySelector(".menu h3").textContent = makeup.gsx$navn.$t;
            document.querySelector(".menu .pris").textContent = `${makeup.gsx$pris.$t},-`;
            document.querySelector(".menu .viden").textContent = makeup.gsx$info.$t;
            document.querySelector(".menu .ingredienser").textContent = makeup.gsx$ingredienser.$t;
            document.querySelector(".menu img").src = `billeder/${makeup.gsx$billede.$t}.jpg`;
        }

        function lukSingle() {
            //pop up siden vises ikke længere
            document.querySelector("#popup").style.display = "none";
        }

        function addEventListenersToButtons() {
            //det tilføjes klik på alle .filter klasserne, og sendes derefter ned til funktionen filtrering()
            document.querySelectorAll(".filter").forEach(elm => {
                elm.addEventListener("click", filtrering);
            })
        }



        function filtrering() {

            //h1 overskriften ændrer sig efter hvad kategori der bliver trykket på
            filter = this.dataset.kategori;
            document.querySelector("h1").textContent = this.textContent;
            document.querySelectorAll(".filter").forEach(elm => {
                elm.classList.remove("valgt");
            })

            start();
        }


        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {
            myFunction()
        };

        // Get the navbar
        var navbar = document.getElementById("navbar");

        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;

        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }


        /* Set the width of the side navigation to 250px */
        function openNav() {
            console.log("yo");
            document.querySelector("#mySidenav").style.width = "250px";
            document.querySelector("#kryds").addEventListener("click", closeNav)
        }

        /* Set the width of the side navigation to 0 */
        function closeNav() {
            document.querySelector("#mySidenav").style.width = "0";
            document.querySelector("#menu").addEventListener("click", openNav)
        }
