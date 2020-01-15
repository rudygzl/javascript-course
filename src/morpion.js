let turn = 0;
let resetMorpion = document.getElementById("jeu").innerHTML;

function resetNoughts() {
    document.getElementById("jeu").innerHTML = resetMorpion;
}

function isOdd(num) {
    return num % 2;
}

function selectGameDiv(e) {
    if (!e.target.classList.contains("player1") && !e.target.classList.contains("player2")) {
        turn++
    }
    if (isOdd(turn)) {
        e.target.classList.remove("bg-blue-800");
        if (!e.target.classList.contains("player2")) {
            e.target.classList.add("bg-red-500", "player1");
            e.target.innerHTML = "X";
        }
    } else {
        e.target.classList.remove("bg-blue-800");
        if (!e.target.classList.contains("player1")) {
            e.target.classList.add("bg-green-500", "player2");
            e.target.innerHTML = "O";
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


    if (x1y1player1 && x1y2player1 && x1y3player1) {
        setTimeout(function () {
            alert("Player 1 wins!");
            resetNoughts();
        }, 10);
    } else if (x2y1player1 && x2y2player1 && x2y3player1) {
        setTimeout(function () {
            alert("Player 1 wins!");
            resetNoughts();
        }, 10);
    } else if (x3y1player1 && x3y2player1 && x3y3player1) {
        setTimeout(function () {
            alert("Player 1 wins!");
            resetNoughts();
        }, 10);
    } else if (x1y1player1 && x2y1player1 && x3y1player1) {
        setTimeout(function () {
            alert("Player 1 wins!");
            resetNoughts();
        }, 10);
    } else if (x3y1player1 && x3y2player1 && x3y3player1) {
        setTimeout(function () {
            alert("Player 1 wins!");
            resetNoughts();
        }, 10);
    } else if (x1y3player1 && x2y3player1 && x3y3player1) {
        setTimeout(function () {
            alert("Player 1 wins!");
            resetNoughts();
        }, 10);
    } else if (x1y2player1 && x2y2player1 && x3y2player1) {
        setTimeout(function () {
            alert("Player 1 wins!");
            resetNoughts();
        }, 10);
    } else if (x1y1player1 && x2y2player1 && x3y3player1) {
        setTimeout(function () {
            alert("Player 1 wins!");
            resetNoughts();
        }, 10);
    } else if (x3y1player1 && x2y2player1 && x1y3player1) {
        setTimeout(function () {
            alert("Player 1 wins!");
            resetNoughts();
        }, 10);
    } else {
        if (x1y1player2 && x1y2player2 && x1y3player2) {
            setTimeout(function () {
                alert("Player 2 wins!");
                resetNoughts();
            }, 10);
        } else if (x2y1player2 && x2y2player2 && x2y3player2) {
            setTimeout(function () {
                alert("Player 2 wins!");
                resetNoughts();
            }, 10);
        } else if (x3y1player2 && x3y2player2 && x3y3player2) {
            setTimeout(function () {
                alert("Player 2 wins!");
                resetNoughts();
            }, 10);
        } else if (x1y1player2 && x2y1player2 && x3y1player2) {
            setTimeout(function () {
                alert("Player 2 wins!");
                resetNoughts();
            }, 10);
        } else if (x3y1player2 && x3y2player2 && x3y3player2) {
            setTimeout(function () {
                alert("Player 2 wins!");
                resetNoughts();
            }, 10);
        } else if (x1y3player2 && x2y3player2 && x3y3player2) {
            setTimeout(function () {
                alert("Player 2 wins!");
                resetNoughts();
            }, 10);
        } else if (x1y2player2 && x2y2player2 && x3y2player2) {
            setTimeout(function () {
                alert("Player 2 wins!");
                resetNoughts();
            }, 10);
        } else if (x1y1player2 && x2y2player2 && x3y3player2) {
            setTimeout(function () {
                alert("Player 2 wins!");
                resetNoughts();
            }, 10);
        } else if (x3y1player2 && x2y2player2 && x1y3player2) {
            setTimeout(function () {
                alert("Player 2 wins!");
                resetNoughts();
            }, 10);
        }
    }
}

game.onclick = selectGameDiv;