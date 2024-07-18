let metros = parseFloat(prompt('Quantos valores em metros deseja converter?'))
let resultado = parseInt(prompt("Escolha uma alternativa: \n1)milimetro\n2)centimetro\n3)decimetro\n4)decametro\n5)hectometro\n6)quilometro"))

let milimetro = metros * 1000
let centimetro = metros * 100
let decimetro = metros * 10
let decametro = metros / 10
let hectometro = metros / 100
let quilometro = metros / 1000

switch (resultado) {
    case 1:
        alert(metros + ' metros convertido em milimetros é: ' + milimetro + ' milimetros(mm)')
        break;
    case 2:
        alert(metros + ' metros convertido em centimetros é: ' + centimetro + ' centimetros(cm)')
        break;
    case 3:
        alert(metros + ' metros convertido em decimetros é: ' + decimetro + ' decimetros(dm)')
        break;
    case 4:
        alert(metros + ' metros convertido em decametros é: ' + decametro + ' decametros(dam)')
        break;
    case 5:
        alert(metros + ' metros convertido em hectometros é: ' + hectometro + ' hectometros(hm)')
        break;
    case 6:
        alert(metros + ' metros convertido em quilometros é: ' + quilometro + ' quilometros(km)')
        break;  
    default:
        alert('Opção invalida')
}