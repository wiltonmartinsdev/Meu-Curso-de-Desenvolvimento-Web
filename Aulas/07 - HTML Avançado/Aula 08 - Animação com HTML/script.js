let jogador = document.getElementById('jogador')

let xInicial = 0
let yInicial = 0

function moverJogadorPara(xInicial,yInicial) {
    let posX = xInicial + 'px'
    let posY = yInicial + 'px'

    jogador.style.top = posX
    jogador.style.left = posY    
}

setInterval(function() {
    moverJogadorPara(xInicial++, yInicial++)
}, 14)

