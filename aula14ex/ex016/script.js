function contar() {
    var inicio = document.querySelector("input#inicio").value
    var fim = Number(document.querySelector("input#fim").value)
    var passo = Number(document.querySelector("input#passo").value)
    var res = document.querySelector("div#res")
    var contagem = Number(inicio)

    if(inicio == '') {
        res.innerHTML = 'Impossivel contar!'
    } else {
        if(passo <= 0) {
            alert("Passo inválido! Considerando PASSO 1")
            passo = 1
        }
        res.innerHTML = "Contando:<br>" 
        while (contagem <= fim) {
            res.innerHTML += ` ${contagem} &#128073;`
            contagem += passo
        }
        res.innerHTML += "&#127937;"
    }
}

let anoAtual = new Date().getFullYear()
let copyright = document.getElementById('copyright')
copyright.innerHTML = `&copy; ${anoAtual} YudiStation`