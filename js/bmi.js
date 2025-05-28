let btnLancer = document.getElementById("btnLancer");
let form = document.getElementById("form");
let divResultat = document.createElement("div");
let modalBody = document.querySelector(".modal-body");
let recharger = document.getElementById("recharger");

recharger.addEventListener("click", () => {
    form.style.display = "block";
    divResultat.innerHTML = "";
    divResultat.removeAttribute("class");
})

btnLancer.addEventListener("click", () => {
    divResultat.removeAttribute("class");
    form.style.display = "block";
})


function calcIMC(taille, poids) {
    if (poids == 0 || taille == 0) return null;
    taille /= 100;

    return poids / (taille * taille);
}

function afficherResultat(imc) {
    form.style.display = "none";
    modalBody.appendChild(divResultat);
    divResultat.classList.add("text-center");
    divResultat.classList.add("my-3");
    divResultat.classList.add("fw-bold");


    if (imc <= 16) {
        divResultat.innerHTML = "<span>Anorexie ou dénutrition</span>"
        divResultat.classList.add("anorexie");
        return
    }
    else if (imc >= 16.5 && imc < 18.5) {
        divResultat.innerHTML = "<span>Maigreur</span>"
        divResultat.classList.add("maigreur");

        return

    }
    else if (imc >= 18.5 && imc <= 25) {
        divResultat.innerHTML = "<span>Corpulence normale</span>"
        divResultat.classList.add("normal");

        return

    }

    else if (imc > 25 && imc <= 30) {
        divResultat.innerHTML = "<span>Surpoids</span>"
        divResultat.classList.add("surpoids");

        return

    }

    else if (imc > 30 && imc <= 35) {
        divResultat.innerHTML = "<span>Obésité modérée (Classe 1)</span>"
        divResultat.classList.add("classi");

        return

    }

    else if (imc > 35 && imc < 40) {
        divResultat.innerHTML = "<span>Obésité élevé (Classe 2)</span>"
        divResultat.classList.add("classii");

        return

    }

    else if (imc > 40) {
        divResultat.innerHTML = "<span>Obésite morbide ou massive</span>"
        divResultat.classList.add("classiii");

        return

    }
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
        afficherResultat(imc);

    }
})
