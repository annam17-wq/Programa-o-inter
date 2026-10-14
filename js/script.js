//no navegador o js tem window

console.log(window.screen)
window.document.body.innerHTML="<p>OLÁ</p>"
window.document.body.style.backgroundColor="pink"

//div

let div = document.createElement("div");
let pnome = document.createElement("p");

pnome.innerHTML="Informe seu nome"
div.appendChild(pnome);

//campo nome
document.body.appendChild(div);
let temp=document.createElement("input")
temp.id="inputNome"
div.appendChild(temp)

//campo peso
div.appendChild(document.createElement("br"))
temp=document.createElement("label");
temp.innerHTML="peso"
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputPeso"
div.appendChild(temp)

//campo altura
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="altura"
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputAltura"
div.appendChild(temp)

//add botao
div.appendChild(document.createElement("br"))
tmp=document.createElement("button");
tmp.id="btnCalcular"
tmp.innerHTML="calcular"
div.append(tmp)


tmp.addEventListener("click", () => {
    inputPeso=document.getElementById("inputPeso")
    inputAltura=document.getElementById("inputAltura")
    peso = Number.parseFloat(inputPeso.value)
    altura = Number.parseFloat(inputAltura.value)
    imc = peso/(altura*altura);
    console.log(imc);

//Exibir em um campo na tela do usuário 
    result= document.createElement("p")
    result.innerHTML=imc
    div.appendChild(result)
    
})
//Sorteio min max

let min = document.createElement("min");
let max = document.createElement("max");
let sorteio = document.createElement("sorteio")

sorteio.innerHTML="  Sorteio: "
div.appendChild(sorteio);




    