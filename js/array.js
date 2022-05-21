const BtnCor = document.querySelector('[data-BtnCor]')

let contador = 0

let imagens = [
    "../img/robotron.png",
    "../img/robotron_branco.png",
    "../img/robotron_rosa.png"
]



BtnCor.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.robo').src = imagens[contador]
    contador++
    if (contador === imagens.length) {
        contador = 0
    }
})

