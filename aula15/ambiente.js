let num = [5, 3, 7, 6, 4, 8]
num.sort()
for(let key in num) {
    console.log(`A posição ${key} tem o valor ${num[key]}`)
}
let pos = num.indexOf(6)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}