function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // Existe o radsex [0] e o radsex [1]
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // Cria elementos em HTML
        img.setAttribute('id', 'foto') // Coloca um atributo com o id=foto
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade < 10) {
                // Criança
                // img.setAttibute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 60) {
                //Adulto
            } else {
                // Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade < 10) {
                // Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 60) {
                //Adulto
            } else {
                // Idoso
            }
        } else {
            alert('[ERRO] Você não preencheu o sexo!')
        }
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        // Para colocar um conteúdo embaixo desse conteúdo de cima
        res.appendChild(img)
    }
}