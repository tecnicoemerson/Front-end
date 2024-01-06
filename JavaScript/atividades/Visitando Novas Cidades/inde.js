let nome = prompt("Qual o nome do turista")
let pergunta = prompt("ele ja visitou uma cidade? (sim ou não)")

let visita
let somaVisitas

while (pergunta === "sim") {
    visita += prompt("qual cidades ele visitou?")
    somaVisitas += parseFloat(visita)
    pergunta = prompt("ele ja visitou outras? (sim ou não)")
    if(pergunta === "nao"){
        break
    }
}

alert(nome + " " + " visitou " + somaVisitas + "\nAs quais são: \n " + visita + " ")