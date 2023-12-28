console.log('Trabalhando com JSON');

const objetoJS = {
    nome: 'Paulo',
    idade: 40,
    estrangeiro: false
}

console.log(objetoJS)
console.log(typeof(objetoJS))

// Falsa String JSON
const falsaStringJSON = {
    "nome": "Paulo",
    "idade": 40,
    "estrangeiro": false
}

console.log(falsaStringJSON)
console.log(typeof(falsaStringJSON))

// String JSON
const stringJSON = JSON.stringify(objetoJS)
console.log(stringJSON)
console.log(typeof(stringJSON))

const parsedJSON = JSON.parse(stringJSON)
console.log(parsedJSON)
console.log(typeof(parsedJSON))
console.log(parsedJSON.nome)
console.log(parsedJSON.idade)
console.log(parsedJSON.estrangeiro)