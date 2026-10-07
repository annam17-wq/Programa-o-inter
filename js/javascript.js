//Comentário de uma linha

/*Comentário de multiplas linhas */

// Três formas de declarar uma variável (Sem tipo)
//o var e o let se distinguem pelo escopo e declaração.

let nome = "Romulo"; 
var sobreNome;
const e=2.78;

if (nome == "Romulo "){
    sobreNome = "Beninca ";
    var idade = 20;
    var pet = "dog";
    console.log("Nome:  " + nome + "Sobrenome:  " + sobreNome + "Idade:  " + idade + "Pet:  "+ pet);
}

 // console.log("Nome: " + nome + "Sobrenome: " + sobreNome + "Idade: " + idade + "Pet: "+ pet);

 //Estruturas de Seleção no JS

 if(idade == "20"){
    console.log("A");
 }
 if (idade === "20"){
   console.log("B");
 }
 
 peso = 80;
 altura = 1.77;
 imc = peso/(altura*altura);
 //Classificação do IMC
 if (imc < 18.5){
    console.log("Abaixo do peso");
 } else if (imc >= 18.5 && imc < 25){
    console.log("Peso normal");
 } else if (imc >= 25 && imc < 30){
    console.log("Acima do peso");
 } else if (imc >= 30 && imc < 35){
    console.log("Obesidade 1");
 } else if (imc >= 35 && imc < 40){
    console.log("Obesidade 2");
 } else if (imc >= 40){
    console.log("Obesidade 3");
 }

//switch case: estrutura de seleção para imc

switch (true){
    case imc < 18.5: console.log("Abaixo do peso"); break;
    case imc >= 18.5 && imc < 25: console.log("Peso normal"); break;
    case imc >= 25 && imc < 30: console.log("Acima do peso"); break;
    case imc >= 30 && imc < 35: console.log("Obesidade 1"); break;
    case imc >= 35 && imc < 40: console.log("Obesidade 2"); break;
    case imc >= 40: console.log("Obesidade 3"); break;
    default: console.log("Valor inválido");
 }

 // switch case: estrutura de seleção
 a=2;
 switch (a){
    case 1: console.log("A"); break;
    case 2: console.log("B"); break;
    case 3: console.log("C"); break;
    default: console.log("D");
 }

 //switch case com expressão

 switch (a){
    case a**a==4: console.log("A"); break;
    case a==a==2: console.log("B"); break;
    case 3==3: console.log("C"); break;
    default: console.log("D");
 }

 //Estrutura de repetição while
 let i=0;
 while (i<5){
    console.log(i);
    i++;
 }

 //for

for (let i=0; i<5; i++){
    console.log(i);
}

//arrays
let carnesDoChurrasco = ["picanha", "costela", "alcatra", "fraldinha"];
carnesDoChurrasco.forEach(  (v1, index) => {
    console.log(v1 + "index:" + index);
} )