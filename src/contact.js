let contacts = [{
    prenom: "Julien",
    nom: "Grillot",
    numero: "0123456789"
}, {
    prenom: "John",
    nom: "Smith",
    numero: "0123456789"
}];

let searchBtn = document.getElementById("search");
let search = document.getElementById("searchInput");
let res = document.getElementById("resultatRecherche");

nomInput.addEventListener("keyup", event => {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addUserBtn").click();
        nomInput.value = "";
    }
});

prenomInput.addEventListener("keyup", event => {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addUserBtn").click();
        prenomInput.value = "";
    }
});

search.addEventListener("keyup", event => {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search").click();
        search.value = "";
    }
});

numeroInput.addEventListener("keyup", event => {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addUserBtn").click();
        numeroInput.value = "";
    }
});

function addFriend() {
    let nom = document.getElementById("nomInput").value;
    let prenom = document.getElementById("prenomInput").value;
    let numero = document.getElementById("numeroInput").value;
    if (isEmptyOrSpaces(nomInput.value) || isEmptyOrSpaces(prenomInput.value) || isEmptyOrSpaces(numeroInput.value)) {
        alertBox3.classList.remove("hidden");
        error3("Vous ne pouvez pas rentrer de caractères vides");
        setTimeout(function () {
            alertBox3.classList.add("hidden");
        }, 3000);
    } else if (isNaN(numeroInput.value)) {
        alertBox3.classList.remove("hidden");
        error3("Le numéro doit contenir seulement des chiffres");
        setTimeout(function () {
            alertBox3.classList.add("hidden");
        }, 3000);
    } else {
        contacts.push({
            prenom,
            nom,
            numero
        });
        infoContact.innerHTML = "";
        document.getElementById("nomInput").value = "";
        document.getElementById("prenomInput").value = "";
        document.getElementById("numeroInput").value = "";
        texteContact()
    }
}

function texteContact() {
    for (let i = 0; i < contacts.length; i++) {
        infoContact.innerHTML += `<span class="mx-4 my-4 text-blue-900 font-semibold">${contacts[i].prenom} ${contacts[i].nom} ${contacts[i].numero}</span>`;
    }
}

function searchUser() {
    for (let i = 0; i < contacts.length; i++) {
        if (search.value === (contacts[i].prenom || contacts[i].nom || contacts[i].numero)) {
            resultatRecherche.innerHTML = `<span class="mx-4 my-4 font-semibold">${contacts[i].prenom} ${contacts[i].nom} ${contacts[i].numero}</span>`;
            search.value = "";
        }
    }
}

searchBtn.onclick = searchUser;
texteContact()