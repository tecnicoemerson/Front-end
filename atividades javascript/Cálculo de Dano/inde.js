let personagem1 = prompt('Insira um nome do primeiro personagem')
let poder = parseFloat(prompt('Quantidade de poder de ataque?'))
let personagem2 = prompt('Insira um nome do segundo personagem')
let vida = parseFloat(prompt('Insira a quantidade de vida do segundo personagem'))
let defesa = parseFloat(prompt('Insira a quantidade de defesa do segundo personagem'))
let escudo = confirm('Ele tem escudo ou não?')

if (poder > defesa && escudo) {
  vida -= open(poder - defesa) / 2
} else if (poder > defesa) {
  vida -= poder - defesa
} else{
  vida -= 0
}

alert('Nome do primeiro personagem: ' + personagem1 +
  '\nQuantidade de poder: ' + poder +
  '\n\nNome do segundo personagem: ' + personagem2 +
  '\nQuantidade de vida do segundo personagem: ' + vida +
  '\nQuantidade de defesa do segundo personagem: ' + defesa
)