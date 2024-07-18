let nome = prompt('Digite o primeiro nome')
let sobrenome = prompt('Digite seu sobrenome')
let campo = prompt('Digite seu campo de estudo')
let data = parseFloat(prompt('digite o ano de nascimento'))

ano = 2024 - data

alert('Recruta cadastrado com sucesso!' + 
    '\nNome: ' + nome + ' ' + sobrenome + 
    '\nCampo de estudo: ' + campo + 
    '\nIdade: ' + ano + ' anos')