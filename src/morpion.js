let turn = 0;

function isOdd (num) {
    return num % 2;
}

function selectGameDiv(e) {
    turn++
    if (isOdd(turn)) {
        e.target.classList.remove("bg-blue-800");
        if (!e.target.classList.contains("player2")) {
            e.target.classList.add("bg-red-500", "player1");
        }
    } else {
        e.target.classList.remove("bg-blue-800");
        if (!e.target.classList.contains("player1")) {
            e.target.classList.add("bg-green-500", "player2");
        }
    }


    let x1y1player1 = document.getElementById("x1y1").classList.contains("player1");
    let x1y2player1 = document.getElementById("x1y2").classList.contains("player1");
    let x1y3player1 = document.getElementById("x1y3").classList.contains("player1");
    let x2y1player1 = document.getElementById("x2y1").classList.contains("player1");
    let x2y2player1 = document.getElementById("x2y2").classList.contains("player1");
    let x2y3player1 = document.getElementById("x2y3").classList.contains("player1");
    let x3y1player1 = document.getElementById("x3y1").classList.contains("player1");
    let x3y2player1 = document.getElementById("x3y2").classList.contains("player1");
    let x3y3player1 = document.getElementById("x3y3").classList.contains("player1");
    let x1y1player2 = document.getElementById("x1y1").classList.contains("player2");
    let x1y2player2 = document.getElementById("x1y2").classList.contains("player2");
    let x1y3player2 = document.getElementById("x1y3").classList.contains("player2");
    let x2y1player2 = document.getElementById("x2y1").classList.contains("player2");
    let x2y2player2 = document.getElementById("x2y2").classList.contains("player2");
    let x2y3player2 = document.getElementById("x2y3").classList.contains("player2");
    let x3y1player2 = document.getElementById("x3y1").classList.contains("player2");
    let x3y2player2 = document.getElementById("x3y2").classList.contains("player2");
    let x3y3player2 = document.getElementById("x3y3").classList.contains("player2");
    

    if (x1y1player1 && x1y2player1 && x1y3player1){
        alert("Joueur 1 a gagné !");
    } else if (x2y1player1 && x2y2player1 && x2y3player1) {
        alert("Joueur 1 a gagné !");
    } else if (x3y1player1 && x3y2player1 && x3y3player1) {
        alert("Joueur 1 a gagné !");
    } else if (x1y1player1 && x2y1player1 && x3y1player1) {
        alert("Joueur 1 a gagné !");
    } else if (x3y1player1 && x3y2player1 && x3y3player1) {
        alert("Joueur 1 a gagné !");
    } else if (x1y3player1 && x2y3player1 && x3y3player1) {
        alert("Joueur 1 a gagné !");
    } else if (x1y2player1 && x2y2player1 && x3y2player1) {
        alert("Joueur 1 a gagné !");
    } else if (x1y1player1 && x2y2player1 && x3y3player1) {
        alert("Joueur 1 a gagné !");
    } else if (x3y1player1 && x2y2player1 && x1y3player1) {
        alert("Joueur 1 a gagné !");
    } else {
        if (x1y1player2 && x1y2player2 && x1y3player2){
            alert("Joueur 2 a gagné !");
        } else if (x2y1player2 && x2y2player2 && x2y3player2) {
            alert("Joueur 2 a gagné !");
        } else if (x3y1player2 && x3y2player2 && x3y3player2) {
            alert("Joueur 2 a gagné !");
        } else if (x1y1player2 && x2y1player2 && x3y1player2) {
            alert("Joueur 2 a gagné !");
        } else if (x3y1player2 && x3y2player2 && x3y3player2) {
            alert("Joueur 2 a gagné !");
        } else if (x1y3player2 && x2y3player2 && x3y3player2) {
            alert("Joueur 2 a gagné !");
        } else if (x1y2player2 && x2y2player2 && x3y2player2) {
            alert("Joueur 2 a gagné !");
        } else if (x1y1player2 && x2y2player2 && x3y3player2) {
            alert("Joueur 2 a gagné !");
        } else if (x3y1player2 && x2y2player2 && x1y3player2) {
            alert("Joueur 2 a gagné !");
        }
    }
    
}

game.onclick = selectGameDiv;