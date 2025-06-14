let btnLancer = document.getElementById("btnLancer");
let form = document.getElementById("form");
let divResultat = document.createElement("div");
let divInfo = document.createElement("div");
let divImc = document.createElement("div");
let modalBody = document.querySelector(".modal-body");
let recharger = document.getElementById("recharger");
let age = document.getElementById("age");
let taille = document.getElementById("taille");
let poids = document.getElementById("poids");
let imc = 0;


recharger.addEventListener("click", () => {
    form.style.display = "block";
    divResultat.innerHTML = "";
    divInfo.innerHTML = "";
    divImc.innerHTML = "";
    divResultat.removeAttribute("class");
    age.value = 0;
    taille.value = 0;
    poids.value = 0;

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
    divImc.innerHTML = "<h5 class='text-center'>Votre <span class='text-primary fw-bold'>IMC</span> est: " + "<strong>" + imc.toFixed(1) + "</strong>" + " </h5>";
    divInfo.innerHTML = "<h6 class='fst-italic text-info mt-3 text-start'>L’interprétation est faite selon la classification de l’OMS (Organisation Mondiale de la Santé)</h6>";
    modalBody.appendChild(divImc);
    modalBody.appendChild(divResultat);
    modalBody.appendChild(divInfo);
    divResultat.classList.add("text-center");
    divResultat.classList.add("my-3");
    divResultat.classList.add("fw-bold");
    divResultat.classList.add("p-2")


    if (imc <= 16) {
        divResultat.innerHTML = "<h2>Anorexie ou dénutrition</h2>"
        divResultat.classList.add("anorexie");
        return
    } else if (imc >= 16.5 && imc < 18.5) {
        divResultat.innerHTML = "<h2>Maigreur</h2>"
        divResultat.classList.add("maigreur");


    } else if (imc >= 18.5 && imc <= 25) {
        divResultat.innerHTML = "<h2>Corpulence normale</h2>"
        divResultat.classList.add("normal");


    } else if (imc > 25 && imc <= 30) {
        divResultat.innerHTML = "<h2>Surpoids</h2>"
        divResultat.classList.add("surpoids");


    } else if (imc > 30 && imc <= 35) {
        divResultat.innerHTML = "<h2>Obésité modérée (Classe 1)</h2>"
        divResultat.classList.add("classi");


    } else if (imc > 35 && imc < 40) {
        divResultat.innerHTML = "<h2>Obésité élevé (Classe 2)</h2>"
        divResultat.classList.add("classii");


    } else if (imc > 40) {
        divResultat.innerHTML = "<h2>Obésite morbide ou massive</h2>"
        divResultat.classList.add("classiii");


    }
}


let btnCalcul = document.getElementById("btnCalc");
let errorMsgTaille = document.getElementById("errorMsgTaille");
let errorMsgPoids = document.getElementById("errorMsgPoids");
let errorMsgAge = document.getElementById("errorMsgAge");


btnCalcul.addEventListener("click", () => {

    if (age.value <= 0) {
        errorMsgAge.textContent = "L'age ne peut pas etre égale ou inférieure à 0"
        errorMsgAge.classList.add("alert");
        errorMsgAge.classList.add("alert-warning");

    } else {
        errorMsgAge.textContent = "";
        errorMsgAge.removeAttribute("class");
    }
    if (taille.value <= 0) {
        errorMsgTaille.textContent = "La taille ne peut pas etre égale ou inférieure à 0"
        errorMsgTaille.classList.add("alert");
        errorMsgTaille.classList.add("alert-warning");
    } else {
        errorMsgTaille.textContent = "";
        errorMsgTaille.removeAttribute("class");
    }
    if (poids.value <= 0) {
        errorMsgPoids.textContent = "Le poids ne peut pas etre égale ou inférieure à 0"
        errorMsgPoids.classList.add("alert");
        errorMsgPoids.classList.add("alert-warning");
    } else {
        errorMsgPoids.textContent = "";
        errorMsgPoids.removeAttribute("class");
    }

    if ((age.value < 18 || age.value > 65) && age.value > 0) {
        errorMsgAge.textContent = "Le calcul se fait uniquement pour les adultes dont l'age est entre 18 et 65 ans!";
        errorMsgAge.classList.add("alert");
        errorMsgAge.classList.add("alert-warning");
    }

    if (taille.value > 0 && poids.value > 0 && (age.value >= 18 && age.value <= 65)) {
        imc = calcIMC(parseFloat(taille.value), parseFloat(poids.value));
        afficherResultat(imc);

    }
})
