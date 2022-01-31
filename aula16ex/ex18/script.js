var numerosAdded = []
function adicionar() {
    var numberInput = document.querySelector("input#numero")
    var numero = Number(numberInput.value)
    var adicionado = document.querySelector("select#adicionado")
    if(numero < 1 || numero > 100 || numero.length == 0) {
        alert("Insira um valor entre 1 e 100!")
    } else {
        if(numero == numerosAdded.find(x => x == numero)) {
            alert("Valor já inserido!")
        } else {
            let x = document.createElement('option')
            x.value = `tab${numero}`
            x.innerHTML = `Valor ${numero} adicionado.`
            adicionado.appendChild(x)
            numerosAdded.push(numero)
            console.log(numerosAdded)
            res.innerHTML = ""
        }
    }
}

function finalizar() {
    var res = document.querySelector("div#res")
    res.innerHTML = ""
    qtdeVal()
    maiorVal()
    menorVal()
    somarVal()
    mediaVal()

    function qtdeVal() {
        let qtdeAdd = document.createElement("p")
        qtdeAdd.innerHTML = `Ao todo, temos ${numerosAdded.length} números cadastrados.`
        res.appendChild(qtdeAdd)
    }
    
    function maiorVal() {
        let maiorValor = document.createElement("p")
        for(let i = 0; i < numerosAdded.length; i++) {
            for(let j = 0; j < numerosAdded.length; j++) {
                if(numerosAdded[j] < numerosAdded[j + 1]) {
                    let aux = numerosAdded[j + 1]
                    numerosAdded[j + 1] = numerosAdded[j]
                    numerosAdded[j] = aux
                }
            }
        } 
        maiorValor.innerHTML = `O maior valor informado foi ${numerosAdded[0]}`
        res.appendChild(maiorValor)
    }
    
    function menorVal() {
        let menorValor = document.createElement("p")
        for(let i = 0; i < numerosAdded.length; i++) {
            for(let j = 0; j < numerosAdded.length; j++) {
                if(numerosAdded[j] < numerosAdded[j + 1]) {
                    let aux = numerosAdded[j + 1]
                    numerosAdded[j + 1] = numerosAdded[j]
                    numerosAdded[j] = aux
                }
            }
        } 
        menorValor.innerHTML = `O menor valor informado foi ${numerosAdded[numerosAdded.length - 1]}`
        res.appendChild(menorValor)
    }
    
    function somarVal() {
        let somarValor = document.createElement("p")
        var soma = 0
        for (key in numerosAdded) {
            soma += numerosAdded[key]
        }
        somarValor.innerHTML = `Somando todos os valores, temos ${soma}`
        res.appendChild(somarValor)
    }

    function mediaVal() {
        let mediaValor = document.createElement("p")
        let soma = 0
        for (key in numerosAdded) {
            soma += numerosAdded[key]
        }
        let media = (soma / numerosAdded.length).toFixed(2)
        mediaValor.innerHTML = `A média dos valores digitados é ${media}`
        res.appendChild(mediaValor)
        console.log(numerosAdded)
    }
}
