// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//function imprimirNome(nome){
    //bloco código
    //console.log('Olá, ${nome})
//}

const imprimirNome = function(nome){
    console.log(`Olá, ${nome}`)
}

imprimirNome("Camila")
imprimirNome("Elza")
imprimirNome("Toninho")


//verificar se o número é par

const fazerOperacoes = function (numero) {
    const verifica = numero % 2 === 0
    const soma = numero + 10
    const multiplica = numero * numero

    return(`O número ${numero} é par? ${verifica}. Somado com 10 o resultado é ${soma}. Multiplicado por ele mesmo o resultado é ${multiplica}.`);
};

console.log(fazerOperacoes(10))
//console.log(soma)// não aparece nada, pois está no escopo local e não no global

// Arrow function
const verificaDados = (login, senha) => {
    const loginArmazenado = "camila@gmail.com"
    const senhaArmazenada = "123456"
    return loginArmazenado === login && senhaArmazenada === senha
}

console.log(verificaDados("camila@gmail.com", "123456"))

