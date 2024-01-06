let carro1 = prompt("Insira o nome do primeiro carro:")
let velo1 = Number(prompt("insira a velocidade do veiculo:"))
let carro2 = prompt("Insira o nome do segundo carro:")
let velo2 = Number(prompt("insira a velocidade do veiculo:"))

let resultado = velo1 > velo2 ? `O carro mais rapido é o ${carro1} ${velo1} kmh` : `O carro mais rapido é o ${carro2} ${velo2} kmh` 
alert(resultado)