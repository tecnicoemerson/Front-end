let quantia = parseFloat(prompt("Qual a quantidade inicial de dinheiro disponivel:"))
let menu
do {
    menu = prompt("Saldo disponível: R$:" + quantia +
        "\n1 - Adicionar" +
        "\n2 - Remover" +
        "\n3 - Sair" 
    )
    
    switch (menu) {
        case "1":
            alert("Você selecionou a opção 1 - Adicionar")
            quantia += parseFloat(prompt("Qual a quantidade que deseja adicionar:"))
            break
        case "2":
            alert("Você selecionou a opção 2 - Remover")
            quantia -= parseFloat(prompt("Qual a quantidade que deseja retirar:"))
            break
        case "3":
            alert("Você selecionou a opção 3 - Sair")
            break
        default:
            alert("Opção inválida!");
    }
} while (menu != "3")