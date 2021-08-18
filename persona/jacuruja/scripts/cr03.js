function escolhaUsuario() {
    var escolha = ""
    while (escolha != 1 && escolha != 2) {
        escolha = prompt("Qual é sua escolha? \n 1 - Arromba o cofre   \n 2 - Tenta persuadir a bibliotecária  ")

        if (escolha == 1) {

            window.location.href = "./cr10.html"

        } else if (escolha == 2) {

            window.location.href = "./cr09.html"
        } else {
            alert('Escolha errada! \n Digite 1 ou 2')
        }
    }
}