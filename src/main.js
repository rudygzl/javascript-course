/* GLOBAL */
let tableExoBtn = document.getElementById("tableExoBtn");
let tableExoBtn2 = document.getElementById("tableExoBtn2");
let tableExo = document.getElementById("tableExo");
let tableExo2 = document.getElementById("tableExo2");
let links = document.getElementById("links");
let alertBox = document.getElementById('errorAlert');
let alertBox2 = document.getElementById('errorAlert2');

let alert = (str) => {
    alertBox.innerHTML = `<span>${str}</span>`;
}

let alert2 = (str) => {
    alertBox2.innerHTML = `<span>${str}</span>`;
}

function mobileMenu() {
    for (let i = 0; i < links.children.length; i++) {
        if (links.children[i].classList.contains("hidden")) {
            links.children[i].classList.remove("hidden");
        } else {
            links.children[i].classList.add("hidden");
        }
    }
}

function shown(str) {
    if (str.classList.contains("hidden")) {
        str.classList.remove("hidden");
    } else {
        str.classList.add("hidden");
    }
}