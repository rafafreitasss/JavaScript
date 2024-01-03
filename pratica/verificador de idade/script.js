function verificar() {
    var ano = window.document.getElementById('ano')
    var res = window.document.getElementById('res')
    var sexo = document.getElementsByName('sexo')
    var a = Number(ano.value)
    if (ano.value.length == 0 || ano.value > 2023) {
        window.alert('Verifique os dados e tente novamente!')
    } else if (a == 1975) {
        res.innerHTML = 'Você é a Patrícia!'
    }
}