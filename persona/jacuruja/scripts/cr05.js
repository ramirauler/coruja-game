function escolhaUsuario() {
    var escolha = ""
    while (escolha != 1 && escolha != 2) {
        escolha = prompt("Qual é sua escolha? \n 1 -Decide cooperar e vai pro isolamento    \n 2 - Foge ")

        if (escolha == 1) {

            window.location.href = "./cr06.html"

        } else if (escolha == 2) {

            window.location.href = "./cr08.html"
        } else {
            alert('Escolha errada! \n Digite 1 ou 2')
        }
    }
}