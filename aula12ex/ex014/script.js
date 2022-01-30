function carregar() {
    let agora = new Date().getHours()
    let horas = document.getElementById('mostrarHoras')
    horas.innerHTML = `Agora são ${agora} horas.`
    let img = document.getElementById('imgHoras')
    
    if (agora >= 0 && agora <= 12){
        img.setAttribute('src','img/manha.png')
        img.setAttribute('alt','Foto da manhã')
        document.body.style.background = 'rgb(198 182 160)'
    } else if (agora > 12 && agora <= 18){
        img.setAttribute('src','img/tarde.png')
        img.setAttribute('alt','Foto da tarde')
        document.body.style.background = 'rgb(235 154 46)'
    } else {
        img.setAttribute('src','img/noite.png')
        img.setAttribute('alt','Foto da noite')
        document.body.style.background = 'rgb(97 71 109)'
    }
    img.setAttribute('width','250px')
    img.setAttribute('height','250px')
}

let anoAtual = new Date().getFullYear()
let copyright = document.getElementById('copyright')
copyright.innerHTML = `&copy; ${anoAtual} Yudi Takeda`