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

let afficherListe = () => {
    tab.forEach((li) => {
        list.innerHTML += `<li class="mx-2">${li}</li>`;
    });
}

let addUser = () => {
    let user = document.getElementById('texte').value;
    tab.push(user);
    list.innerHTML = "";
    afficherListe();
}

let removeUser = () => {
    tab.pop();
    list.innerHTML = "";
    afficherListe();
}

afficherListe();