let videoContainers = document.getElementsByClassName('v-container')

for (let vc of videoContainers) {
    let src = vc.dataset.src
    
    let video = document.createElement('video')
    video.className = 'video'
    video.src = src

    vc.appendChild(video)
    
    let controls = document.createElement('div')
    controls.className = 'control'
    controls.appendChild(createBtn('./Imagens/play.png', play, video))
    controls.appendChild(createBtn('./Imagens/stop.png', stop, video))
    controls.appendChild(createBtn('./Imagens/volume-down.png', volume_down, video))
    controls.appendChild(createBtn('./Imagens/volume-up.png', volume_up, video))
    controls.appendChild(createBtn('./Imagens/back.png', back, video))
    controls.appendChild(createBtn('./Imagens/advance.png', advance, video)) 

    vc.appendChild(controls)

    vc.addEventListener('mouseenter', showControl)
    vc.addEventListener('mouseleave', hideControl)
}

function showControl(e) {
    let container = e.target
    let children = container.children
    let control = children[children.length - 1]
    control.style.display = 'block'
}

function hideControl(e) {
    let container = e.target
    let children = container.children
    let control = children[children.length - 1]
    control.style.display = 'none'
}

function createBtn(imgSrc, f, video) {
    let btn = document.createElement('img')
    btn.className = 'btn'
    btn.src = imgSrc
    btn.addEventListener('click', f.bind(video))

    return btn;
}

function play(e) {
    if (this.paused) {
        e.target.src = './Imagens/pause.png'
        this.play()
    }
    else {
        e.target.src = './Imagens/play.png'
        this.pause()
    }
}

function pause() {
    this.pause()
}

function stop() {
    this.pause()
    this.currentTime = 0
}

function volume_down() {
    this.playbackRate -= 0.1
}

function volume_up() {
    this.playbackRate += 0.1
}

function back() {
    this.currentTime -= 10
}

function advance() {
    this.currentTime += 10
}


