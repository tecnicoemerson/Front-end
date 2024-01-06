let valor = parseFloat(prompt("Insira um valor em metros:"))

let milímetro = (valor * 1000)
let centímetro = (valor * 100)
let decímetro = (valor * 10)
let decâmetro = (valor / 10)
let hectômetro = (valor / 100)
let quilômetro = (valor / 1000)

let resultado = parseFloat(prompt("Para qual unidade de medida deseja converter?" +
"\n1 - milímetros (mm)" +
"\n2 - centímetros (cm)" +
"\n3 - decímetros (dm)" +
"\n4 - decâmetros (dam)" +
"\n5 - hectômetro (hm)" +
"\n6 - quilômetro (km)"))

switch(resultado){
    case 1:
        alert(`O resultado em milímetro é de ${milímetro}`)
        break
    case 2:
        alert(`O resultado em centímetro é de ${centímetro}`)
        break
    case 3:
        alert(`O resultado em decímetro é de ${decímetro}`)
        break
    case 4:
        alert(`O resultado em decâmetro é de ${decâmetro}`)
        break    
    case 5:
        alert(`O resultado em hectômetro é de ${hectômetro}`)
        break
    case 6:
        alert(`O resultado em quilômetro é de ${quilômetro}`)
        break       
    default:
        alert("Opçao invalida")
}