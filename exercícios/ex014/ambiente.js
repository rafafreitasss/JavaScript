let num = [5, 7, 9, 2]

//num[posição que vai ser colocado] = o valor que será inserido
num[4] = 5

num.push(8)

//tamanho total do array
num.length

console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

//para percorrer e imprimir todos os números que estão no array[vetor]
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos]);
    
}

let posicao = num.indexOf(8)
console.log(`O valor 8 está na posição ${posicao}`)



