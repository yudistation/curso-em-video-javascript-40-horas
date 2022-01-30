function tabuada() {
    let inputNumber = document.querySelector('input#numero')
    let resTab = document.querySelector('select#tabuada')
    let multiplicador = Number(inputNumber.value)
    if(inputNumber.value.length == 0){
        alert('Por favor, insira um número!')
    } else {
        resTab.innerHTML = ''
        for(let i = 1; i <= 10; i++) {
            let x = document.createElement('option')
            x.value = `tab${i}`
            x.innerHTML = `${multiplicador} x ${i} = ${multiplicador*i}`
            resTab.appendChild(x)
        }
    }
}

let anoAtual = new Date().getFullYear()
let copyright = document.getElementById('copyright')
copyright.innerHTML = `&copy; ${anoAtual} YudiStation`