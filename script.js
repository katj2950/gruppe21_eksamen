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


function burgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
