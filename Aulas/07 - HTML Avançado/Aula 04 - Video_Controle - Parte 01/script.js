let video = document.getElementById('video1')
let container = document.getElementById('container')
let controle = document.getElementById('controle')

function showBtn() {
    controle.style.opacity = '1'
}

function hideBtn() {
    controle.style.opacity = '0'
}

function retroceder() {
    video.currentTime -= 10 
}

function avancar() {
    video.currentTime += 10
}

function diminuir_vol() {
    video.playbackRate -= 0.1
}

function aumentar_vol() {
    video.playbackRate += 0.1
}

function play() {
    video.play()
}

function stop() {
    video.pause()
    video.currentTime = 0
}

function pause() {
    video.pause()
}