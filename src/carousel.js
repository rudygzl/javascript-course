/* carousel */
let carousel = document.getElementById("carousel");
let suivant = document.getElementById("suivant");
let precedent = document.getElementById("precedent");
let infoCarousel = document.getElementById("infoCarousel");
// Vous aurez besoin de ce genre de choses :// $carousel.style.borderColor = "#f00";
function next() {
    let i = 0
    let ok = false;
    while (i <= carousel.children.length - 1 && !ok) {
        if (!carousel.children[i].classList.contains("hidden")) {
            for (let j = 0; j <= carousel.children.length - 1; j++) {
                if (j === i + 1 || j === 0 && i === carousel.children.length - 1) {
                    carousel.children[j].classList.remove("hidden");
                } else {
                    carousel.children[j].classList.add("hidden");
                }
            }
            ok = true;
        }
        i++
    }
}

function prev() {
    let i = 0
    let ok = false;
    while (i <= carousel.children.length - 1 && !ok) {
        if (!carousel.children[i].classList.contains("hidden")) {
            for (let j = 0; j <= carousel.children.length - 1; j++) {
                if (j === i - 1 || j === carousel.children.length - 1 && i === 0) {
                    carousel.children[j].classList.remove("hidden");
                } else {
                    carousel.children[j].classList.add("hidden");
                }
            }
            ok = true;
        }
        i++
    }
}

function addCase() {
    carousel.innerHTML += `<li class="inline-block border-box p-2 w-full h-full font-semibold flex justify-center">Block ${carousel.children.length + 1}</li>`;
    infoCarousel.innerHTML = `<span class="text-white font-bold">La case ${carousel.children.length} a bien été ajoutée !</span>`
    setTimeout(function () {
        infoCarousel.innerHTML = ""
    }, 2000);

}

function removeCase() {
    if (carousel.children.length !== 1) {
        let oldRemove = carousel.children.length;
        carousel.lastElementChild.remove();
        carousel.lastElementChild.classList.remove("hidden");
        infoCarousel.innerHTML = `<span class="text-white font-bold">La case ${oldRemove} a bien été supprimée !</span>`
        setTimeout(function () {
            infoCarousel.innerHTML = ""
        }, 2000);
    } else {
        alertBox2.classList.remove("hidden");
        error2("Il doit rester au moins une case");
        setTimeout(function () {
            alertBox2.classList.add("hidden");
        }, 3000);
        carousel.innerHTML = `<li class="inline-block border-box p-2 w-full h-full font-semibold flex justify-center">Block 1</li>`;
    }
}
suivant.onclick = next;
precedent.onclick = prev;