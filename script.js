function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    setInterval(carregar,1000)

    if(hora < 10) hora = `0${hora}`
    if(minutos < 10) minutos = `0${minutos}`
    if(segundos < 10) segundos = `0${segundos}`
    
    
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}.`
    //setInterval(showTime, 1000);
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotoManha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'fotoTarde.jpg'
        document.body.style.background = '#b9846f'
    } else if (hora >= 18 && hora <= 23) {
        //Boa noite!
        img.src = 'fotoNoite.jpg'
        document.body.style.background = '#515154'
    } else {
        msg.innerHTML = "Hora Inválida! Digite um horário correto."
    }
}   