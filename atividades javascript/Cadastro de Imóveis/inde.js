const imoveis = []
let menu

do {
  menu = prompt(
    "Total de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )

  switch (menu) {
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
      imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      //perguntando se o usuário deseja salvar aquele imóvel e exibindo as informações digitadas
      const confirma = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui Garagem? " + imovel.garagem
      )

      if (confirma) {
        imoveis.push(imovel)
        alert("Imóvel salvo com sucesso!")
      }else{
        alert("Voltando ao menu!")
      }
      break
      case "2":
      //FOR para iterar sobre o array de imóveis e exibir cada um deles em um alert
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiros: " + imoveis[i].banheiros +
          "\nPossui Garagem? " + imoveis[i].garagem
        )
      }
      break
      case "3":
        alert("Encerrando...")
        break
      default:
        alert("Opção inválida!")
        break
    }
  } while (menu !== "3");