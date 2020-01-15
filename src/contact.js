let contacts = [{
    prenom: "Julien",
    nom: "Grillot",
    numero: "0123456789"
}, {
    prenom: "John",
    nom: "Smith",
    numero: "0123456789"
}];

function addFriend () {
    console.log(nomInput.value);
}

function texteContact (contact) {
    for (let i = 0; i < contacts.length; i++) {
        if (contact === contacts[i]) {
            tableExo3.firstElementChild.innerHTML += `${contacts[i].prenom} ${contacts[i].nom} (${contacts[i].numero})`;
        } 
    }
}

texteContact(contacts[0])