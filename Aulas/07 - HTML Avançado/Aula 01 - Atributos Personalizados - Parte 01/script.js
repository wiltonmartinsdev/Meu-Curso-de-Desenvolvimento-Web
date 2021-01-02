let image = document.getElementById('like')

image.addEventListener('click', function() {
    //image.src = './imagens/like_down.jpg'
    //image.setAttribute('src', './imagens/like_down.jpg')
    let lastImage = image.getAttribute('src')
    image.setAttribute('src', './imagens/like_down.jpg')
    console.log(lastImage)
})