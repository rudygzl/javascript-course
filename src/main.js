/* GLOBAL */
let tableExoBtn = document.getElementById("tableExoBtn");
let tableExoBtn2 = document.getElementById("tableExoBtn2");
let tableExo = document.getElementById("tableExo");
let tableExo2 = document.getElementById("tableExo2");
let link = document.getElementsByClassName("link");

function mobileMenu () {
    if (link.classList.contains("hidden")) {
        link.classList.remove("hidden");
    } else {
        link.classList.add("hidden");
    }
}

function shown(str) {
    if (str.classList.contains("hidden")) {
        str.classList.remove("hidden");
    } else {
        str.classList.add("hidden");
    }
}