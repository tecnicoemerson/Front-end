let turismo = prompt('Qual nome do turista?')
let pergunta = prompt('Ele ja visitou alguma cidade?')
let cidade = ''

while (pergunta === 'sim') {
    let cidades = prompt('Qual nome da cidade que ele visitou?')
    cidade += cidades + '\n'
    pergunta = prompt('Ele ja visitou outra cidade?')
    if(pergunta === 'não'){
        break
    }    
}

alert('Nome do turista: ' + turismo +
    '\nCidades que ele visitou: \n' + cidade
)