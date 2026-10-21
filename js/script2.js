let h1titulo=document.getElementById("titulo");
h1titulo.innerHTML="I62026";

let h1 = document.createElement("h1");
document.body.appendChild(h1);

let inputPeso = document.getElementById("iPeso")
let inputAltura = document.getElementById("iAltura")
let calcular = document.getElementById("butao")
let pimc = document.querySelector("#IMC")
let imgImc = document.getElementById("imgImc")

calcular.addEventListener("click", () =>{

let peso = Number(inputPeso.value)
let altura = Number(inputAltura.value)

let imc = peso/(altura*altura)
console.log(imc)
pimc.innerHTML = imc


if (imc < 18.5){
    console.log("Abaixo do peso")
    imgImc.src = "js/imgsimc/abaixopeso.png"
}

else if (imc > 18.5 && imc < 24.9){
    console.log("Peso normal")
    imgImc.src = "js/imgsimc/normal.png"
}

else if (imc > 25 && imc < 29.9){
    console.log("Sobrepeso")
    imgImc.src = "js/imgsimc/sobrepeso.png"

}

else if (imc > 30 && imc < 34.9){
    console.log("Obesidade grau 1")
    imgImc.src = "js/imgsimc/obesidade1.png"
}

else if (imc > 35 && imc < 39.9){
    console.log("Obesidade grau 2")
    imgImc.src = "js/imgsimc/obesidade2.png"
}

else if (imc > 40){
    console.log("Obesidade grau 3")
    imgImc.src = "js/imgsimc/obesidade3.png"
}

imgImc.style.display = "block"


});