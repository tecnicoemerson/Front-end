let car1 = prompt('Qual nome do primeiro carro?')
let velo1 = parseFloat(prompt('Em qual velocidade esta o ' + car1 + '?'))
let car2 = prompt('Qual nome do segundo carro?')
let velo2 = parseFloat(prompt('Em qual velocidade esta o ' + car2 + '?'))

if(velo1 > velo2){
    alert(car1 + ' é o carro mais rapido')
} else if (velo2 > velo1){
    alert(car2 + ' é o carro mais rapido')
}else{
    alert(car1 + ' e ' + car2 + ' tem a mesma velocidade')
}