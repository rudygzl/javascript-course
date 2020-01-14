/* carousel */
let carousel = document.getElementById("carousel");
let suivant = document.getElementById("suivant");
// Vous aurez besoin de ce genre de choses :// $carousel.style.borderColor = "#f00";
function next() {
    let i = 0
    let ok = false;
    while (i <= 3 && !ok) {
        if (!carousel.children[i].classList.contains("hidden")) {
            ok = true;
            
        }
    }
}
suivant.onclick = next;