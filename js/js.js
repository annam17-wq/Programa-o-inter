console.log("Olá mundão Perdido!");
// Declarar variaveis em JS.

i=0; //variavel global var
var nome = "Anna"; //define variavel global
nome = 1;
let numero; //define variavel local por bloco
const numeroPI =3.141516;

console.log("Variavel i:"+typeof(i));
console.log("Variavel i:"+typeof(nome));

//definir variaveis

var b;
let a;
const c=3.14;

//if else, for, switch

//String, number, null, undefided

console.log("O tipo da variável B:"+typeof(b));
a="2";
console.log("O tipo da variável B"+typeof(a));

if(a==b){

   console.log("O valor dessas variáveis é igual");
}
if(!a==b){
   console.log("O valor dessas varoáveis são diferentes");
}

var itensChurrasco =[];
itensChurrasco.push("costela");
itensChurrasco.push("pão de alho");
itensChurrasco.push("linguicinha");
itensChurrasco.push("rollmops");

for (let i = 0; i<itensChurrasco.length-1; i++){

}

itensChurrasco.forEach((e,i)=>{
console.log(i+"-"+e);
})

//Funções com Array
//reverse, join, map

nome = "João Henrique Marcelo Boos";
console.log(nome.split("").reverse().join(""));

itensChurrasco.map((e)=>{
   console.log(e.length);
})

//filter

console.log(itensChurrasco.filter( (e, i)=>{return i!=3}));
//filtrar por qualquer elemento que contenha uma letra como p
console.log(itensChurrasco.filter( (e, i)=>{return e.split("").includes("p")}));
//true false


console.log(JSON.stringify(itensChurrasco));
array2=JSON.parse("[\bla\", \"bla1\"]")
console.log(array2[1])