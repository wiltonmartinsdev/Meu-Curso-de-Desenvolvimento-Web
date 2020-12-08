// JSON é uma representação de um objeto, uma forma de representar objetos em JavaScript.
// JSON Stringfy pega um objeto json e transforma numa string.
// JSON Parse pega uma string e transforma num objeto json.


let a = {nome: 'Wilton', nota: 8.5}

let b = JSON.stringify(a)

let a2 = '{"nome": "fabio", "nota": 7.8}'

let b2 = JSON.parse(a2)

console.log(a)
console.log(b)

console.log(a2)
console.log(b2)

console.log(b2.nome)
console.log(b2.nota)