let menu

do {
    menu = prompt(
        "Escolha uma das opções abaixo" +
        "\n1 - Comidas " +
        "\n2 - Serviços " +
        "\n3 - Natureza " +
        "\n4 - Carros " +
        "\n5 - Encerrar"
    )
    
    switch (menu) {
        case "1":
            alert("Você selecionou a opção 1 - Comidas")
            break
        case "2":
            alert("Você selecionou a opção 2 - Serviços")
            break
        case "3":
            alert("Você selecionou a opção 3 - Natureza")
            break
        case "4":
            alert("Você selecionou a opção 4 - Carros")
            break
        case "5":
            alert("Você selecionou a opção 5 - Encerrar \nO sistema está sendo encerrado")
            break
        default:
            alert("Opção inválida!");
    }
} while (menu != "5")