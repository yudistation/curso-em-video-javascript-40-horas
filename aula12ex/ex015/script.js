function verificar(){
    let currentYear = new Date().getFullYear()
    let birthYear = document.getElementById('birthYear')
    let res = document.querySelector('div#res')

    if (birthYear.value.length == 0 || birthYear.value > currentYear) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('gender')
        let yearsOld = currentYear - Number(birthYear.value)
        let gender = ''
        let srcValue = 'img/'
        let lyfeCicle = ''
        if(fsex[0].checked) {
            gender = 'masculino'
            if(yearsOld >= 0 && yearsOld <= 2) {
                srcValue += 'nene'
                lyfeCicle = 'nenezinho'
            } else if (yearsOld > 2 && yearsOld <= 12) {
                srcValue += 'crianca'
                lyfeCicle = 'menino'
            } else if (yearsOld > 12 && yearsOld <= 17) {
                srcValue += 'adolescente'
                lyfeCicle = 'rapaz'
            } else if (yearsOld > 17 && yearsOld < 55) {
                srcValue += 'adulto'
                lyfeCicle = 'homem'
            } else {
                srcValue += 'idoso'
                lyfeCicle = 'idoso'
            }
            srcValue += '-masc'
        } else if(fsex[1].checked){
            gender = 'feminino'
            if(yearsOld >= 0 && yearsOld <= 2) {
                srcValue += 'nene'
                lyfeCicle = 'nenezinha'
            } else if (yearsOld > 2 && yearsOld <= 12) {
                srcValue += 'crianca'
                lyfeCicle = 'menina'
            } else if (yearsOld > 12 && yearsOld <= 17) {
                srcValue += 'adolescente'
                lyfeCicle = 'garota'
            } else if (yearsOld > 17 && yearsOld < 55) {
                srcValue += 'adulto'
                lyfeCicle = 'mulher'
            } else {
                srcValue += 'idoso'
                lyfeCicle = 'idosa'
            }
            srcValue += '-fem'
        } else {
            alert('[ERRO] Selecione um gênero!')
        }
        if(fsex[0].checked || fsex[1].checked) {
            srcValue += '.png'
            res.innerHTML = `<p>Detectamos ${lyfeCicle} com ${yearsOld} anos.</p>`
            res.style.textAlign = 'center'
            let img = document.createElement('img')
            img.setAttribute('src', srcValue)
            img.setAttribute('alt', `${gender} com ${yearsOld} anos.`)
            res.appendChild(img)
        }
    }
}

let anoAtual = new Date().getFullYear()
let copyright = document.getElementById('copyright')
copyright.innerHTML = `&copy; ${anoAtual} Yudi Takeda`