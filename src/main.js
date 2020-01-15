/* GLOBAL */
let tableExoBtn = document.getElementById("tableExoBtn");
let tableExoBtn2 = document.getElementById("tableExoBtn2");
let tableExoBtn3 = document.getElementById("tableExoBtn3");
let tableExo = document.getElementById("tableExo");
let tableExo2 = document.getElementById("tableExo2");
let tableExo3 = document.getElementById("tableExo3");
let links = document.getElementById("links");
let alertBox = document.getElementById('errorAlert');
let alertBox2 = document.getElementById('errorAlert2');
let nomInput = document.getElementById('nomInput');
let prenomInput = document.getElementById('prenomInput');
let numeroInput = document.getElementById('numeroInput');
let game = document.getElementById('jeu');

let error = (str) => {
    alertBox.innerHTML = `<span>${str}</span>`;
}

let error2 = (str) => {
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