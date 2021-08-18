function escolhaUsuario() {
    var escolha = ""
    while (escolha != 1 && escolha != 2) {
        escolha = prompt("Qual é sua escolha? \n 1 - Ignora e prossegue com a missão  \n 2 - Interrompe a missão para descansar e prosear com ela")

        if (escolha == 1) {

            window.location.href = "./cr08.html"

        } else if (escolha == 2) {

            window.location.href = "./cr09.html"
        } else {
            alert('Escolha errada! \n Digite 1 ou 2')
        }
    }
}