function escolhaUsuario() {
    var escolha = ""
    while (escolha != 1 && escolha != 2) {
        escolha = prompt("Qual é sua escolha? \n 1 - Disfarça como se tivesse espirrado e diz que está resfriada    \n 2 - Diz que viu a Jacupemba Maldita pela região e pede para ficar alerta ")

        if (escolha == 1) {

            window.location.href = "./cr05.html"

        } else if (escolha == 2) {

            window.location.href = "./cr07.html"
        } else {
            alert('Escolha errada! \n Digite 1 ou 2')
        }
    }
}