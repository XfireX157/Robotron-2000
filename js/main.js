const Subtrair = document.querySelector('.subtrair')
const Somar = document.querySelector('.somar')
const braco = document.querySelector('.braco')

const Btns = document.querySelectorAll('.controle-ajuste')

for (let i = 0; i < Btns.length; i++) {
    const element = Btns[i];
    element.addEventListener('click', (event) => {
        matenhaSoma(event.target.innerHTML)
    })
}

function matenhaSoma(operacao) {
    if (operacao === '+') {
        braco.value = parseInt(braco.value) + 1
    } else {
        braco.value = parseInt(braco.value) - 1
    }
}
