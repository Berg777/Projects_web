function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formulario_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formulario_ano.value.length == 0 || Number(formulario_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formulario_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe_menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem_homem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'Adulto_homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso_homem.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe_menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem_mulher.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulto_mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}