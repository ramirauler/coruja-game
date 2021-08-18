function escolhaUsuario() {
    var escolha = ""
    while (escolha != 1 && escolha != 2) {
        escolha = prompt("Qual é sua escolha? \n 1 - Toma os remédios     \n 2 - Finge que toma, mas não engole  ")

        if (escolha == 1) {

            window.location.href = "./cr07.html"

        } else if (escolha == 2) {

            window.location.href = "./cr07.html"
        } else {
            alert('Escolha errada! \n Digite 1 ou 2')
        }
    }
}