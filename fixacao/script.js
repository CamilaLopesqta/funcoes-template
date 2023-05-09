// Resolva o Exercício de Fixação!

const verificaIdade = (nome, anoNascimento, anoAtual) => {
        let idade = (anoAtual - anoNascimento)
        let maiorIdade = idade >= 18
    return (`${nome} é maior de idade? ${idade} ${maiorIdade}`)
}

console.log(verificaIdade(`Camila`, 1982, 2023))
console.log(verificaIdade(`Elza`, 1954, 2023))
console.log(verificaIdade(`Arthur`, 2016, 2023))

