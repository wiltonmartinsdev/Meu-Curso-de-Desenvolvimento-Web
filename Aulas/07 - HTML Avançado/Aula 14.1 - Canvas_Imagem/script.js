// O this.naturalWidth/Height respeita a proporção mas ela tem a metade do tamanho original.
let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')
let img = new Image()
img.src = 'pp.JPG'
img.onload = desenharImg

function desenharImg() {
    ctx.drawImage(this, 120, 80, this.naturalWidth / 2, this.naturalHeight / 2)
}



