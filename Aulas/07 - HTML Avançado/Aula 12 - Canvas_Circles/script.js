let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')

let x = 250 // Centro do circulo
let y = 250 // Centro do circulo
let raio = 100
let inicio = 0 // O inicio é medido em Radiano. Um circulo inteiro tem dois Radianos
let fim = 2 * Math.PI // O fim também é medido em Radiano

ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.fillStyle = 'blue'
ctx.arc(x, y, raio, inicio, fim)

ctx.fill()
ctx.stroke()