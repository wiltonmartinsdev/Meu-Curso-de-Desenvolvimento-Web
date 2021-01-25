let h = document.getElementById('h')
h.addEventListener('mouseover', int)
h.addEventListener('mouseout', out)

function int(e) {
    let qop1 = e.target
    h.style.color = 'red'
    console.log(qop1.parentElement)
}

function out(e) {
    let qop2 = e.target
    h.style.color = 'blue'
    console.log(qop2.parentElement)
}

