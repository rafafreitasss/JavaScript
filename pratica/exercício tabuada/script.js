function tabuada() {
    let num = document.getElementById('num')
    let tabuada = document.getElementById('selecttab')
    if (num.value.length == 0) {
        window.alert ('Por favor, digite um número!')
    } else {
    let n = Number(num.value)
    let c = 1
    tabuada.innerHTML = ''
    while (c <= 10) {
        let item = document.createElement('option')//É como se estivesse criando o elemento 'option' no HTML
        item.text = `${n} x ${c} = ${n*c}`
        tabuada.appendChild(item)
        c++
    }
    }

}