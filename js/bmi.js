function calcIMC(taille, poids) {

    if (poids == 0 || taille == 0) return null;

    return (poids / taille * taille);
}

let taille = document.getElementById("taille");
let poids = document.getElementById("poids");


let btnCalcul = document.getElementById("btnCalc");
let errorMsgTaille = document.getElementById("errorMsgTaille");
let errorMsgPoids = document.getElementById("errorMsgPoids");

let imc = 0;

btnCalcul.addEventListener("click", () => {
    if (taille.value <= 0) {
        errorMsgTaille.textContent = "La taille ne peut pas etre égale ou inférieure à 0"
    }

    else errorMsgTaille.textContent = "";

    if (poids.value <= 0) {
        errorMsgPoids.textContent = "Le poids ne peut pas etre égale ou inférieure à 0"
    }
    else errorMsgPoids.textContent = "";

    if (taille.value > 0 && poids.value > 0) {
        imc = calcIMC(parseFloat(taille.value), parseFloat(poids.value));

    }
})
