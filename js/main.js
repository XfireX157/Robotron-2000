const Btns = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatisticas]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

for (let i = 0; i < Btns.length; i++) {
    const element = Btns[i];
    element.addEventListener('click', (event) => {
        matenhaSoma(event.target.dataset.controle, event.target.parentNode)
        atualizaEstatistica(event.target.dataset.objetos)
    })
}


function matenhaSoma(operacao, control) {
    const pecas = control.querySelector('[data-contador]')

    if (operacao === '-') {
        pecas.value = parseInt(pecas.value) - 1
    } else if (operacao === '+') {
        pecas.value = parseInt(pecas.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach((elemento) => {
        elemento.innerHTML = parseInt(elemento.innerHTML) + pecas[peca][elemento.dataset.estatisticas]
    })
}