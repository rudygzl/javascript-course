/* tableEXO */
let list = document.getElementById('liste');
let tab = ['Bob', 'Julien', 'Roger'];
let text = document.getElementById("texte")

text.addEventListener("keyup", event => {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("ajouter").click();
        text.value = "";
    }
});

let alertBox = document.getElementById("errorAlert");

function inputClear() {
    text.value = "";
}

let refresh = () => {
    tab = ['Bob', 'Julien', 'Roger'];
    list.innerHTML = "";
    afficherListe();
}

let afficherListe = () => {
    tab.forEach((li) => {
        list.innerHTML += `<li class="mx-2 noselect text-blue-800">${li}</li>`;
    });
}

function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}
let alert = (str) => {
    alertBox.innerHTML = `<span>${str}</span>`
}

let select = (e) => {
    e.target.classList.toggle("bg-blue-200");
}

list.onclick = select;

let addUser = () => {
    let user = document.getElementById('texte').value;
    if (isEmptyOrSpaces(user)) {
        alertBox.classList.remove("hidden");
        alert("Vous ne pouvez pas rentrer de caractères vides")
    } else {
        tab.push(user);
        list.innerHTML = "";
        alertBox.classList.add("hidden");
        afficherListe();
    }

}

let suppr = () => {
    for (let i = (list.children.length - 1); i >= 0; i--) {
        let selected = list.children[i].classList.contains("bg-blue-200");
        if (selected) {
            tab.splice(i, 1);
        }
    }
    list.innerHTML = "";
    afficherListe();
}


let removeUser = () => {
    tab.pop();
    list.innerHTML = "";
    afficherListe();
}

afficherListe();