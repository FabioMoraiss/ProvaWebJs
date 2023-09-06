const formulariozinho = document.querySelector("form");
const resposta = document.querySelector("h2")

var abacaxi = []; // declara o array globalmente

formulariozinho.addEventListener("submit", (e) => {

    e.preventDefault();

    let numero = Number(formulariozinho.bango.value);

    formulariozinho.bango.value = "" //limpa o seletor



   
    abacaxi.push(numero); //adiciona o numero
    abacaxi.sort();  //ordena

    //mostrar array
    let arrayzinho =  getArrayzinho(abacaxi);
    resposta.innerText = arrayzinho;
});

function getArrayzinho(array) {
    let arrayString= ""
    for(let i =0; i<array.length; i++) {
        arrayString += "\n" +array[i];
    }
    return arrayString;
}