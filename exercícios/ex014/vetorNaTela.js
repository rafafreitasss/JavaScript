let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)

/* 
console.log(calores[0])
console.log(calores[1])
console.log(calores[2])
console.log(calores[3])
console.log(calores[4])
console.log(calores[5])
*/

for (let pos = 0; pos < valores.length; pos++) {
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//código de cima simplificado
for(let pos in valores) {
    console.log(valores[pos])
}

