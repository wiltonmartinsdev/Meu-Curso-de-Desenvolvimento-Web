var alunos = ['Martins', 'Igor', 'José', 'Marcos', 'Mariana', 'Mariana']
console.log(alunos.length)
console.log(alunos[0])

var alunos2 = ['Martins', 'Igor', 'José', 'Marcos', 'Mariana', 'Mariana']

for (var i = 0; i < alunos2.length; i++) {
    console.log(alunos2[i])
}

for (var i in alunos2) {
    console.log(i)
}

for (var i of alunos2) {
    console.log(i)
}

alunos.forEach(function (elemento) {
    console.log(elemento)
})