/*window.addEventListener("DOMContentLoaded", StartLoad);

let content;
const footerUrl = "footer.html";
const navUrl = "navigation.html";
const pageURl = "https://katjsoeg.dk/kea/2_sem_eksamen/designwp/wordpress/wp-json/wp/v2/pages/?&per_page=99";

const main = document.querySelector("main");
const footer = document.querySelector("footer");
const header = document.querySelector("header");

let menuIsOpen = false;

function StartLoad() {
    GetNav();
    GetFooter();*/
// check if there exists a class saying that content needs to be loaded in.
//    if (document.querySelector(".loadedPageContent") !== null) {
//        GetJsonContent();
//    }
//}
//
//async function GetNav() {
//    const htmlResponse = await fetch(navUrl);
//    content = await htmlResponse.text();
//    header.innerHTML = content;
//    let nav = header.querySelector(".menuItems");
//    let menu = header.querySelector(".burgermenu");
//    menu.addEventListener("click", () => {
//        if (menuIsOpen == false) {
//            menuIsOpen = true;
//            nav.style.display = "flex";
//            menu.querySelector("img").src = src = "images/burger_close.png";
//        } else {
//            menuIsOpen = false;
//            nav.style.display = "none";
//            menu.querySelector("img").src = src = "images / iconmonstr - menu - 1. svg";
//        }
//    })
//}
//
//async function GetFooter() {
//    const htmlResponse = await fetch(footerUrl);
//    content = await htmlResponse.text();
//    footer.innerHTML = content;
//}
//
//async function GetJsonContent() {
//    const jsonData = await fetch(pageURl);
//    pages = await jsonData.json();
//    InsertContent();
//}
//
//function InsertContent() {
//    let pageText = document.querySelector(".loadedPageContent").textContent;
//    pages.forEach(page => {
//        if (page.slug == pageText) {
//            main.innerHTML = page.content.rendered + main.innerHTML;
//            console.log("loaded");
//        }
//    })
//}
//
//function goBack() {
//    window.history.back();
//}
