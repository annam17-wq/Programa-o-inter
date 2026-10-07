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
