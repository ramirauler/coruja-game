function escolhaUsuario() {
    var escolha = ""
    while (escolha != 1 && escolha != 2) {
        escolha = prompt("Qual é sua escolha? \n 1 - Solta o sinalizador para chamar o resgate da equipe médica  \n 2 - Tenta se virar usando o seu kit de primeiros socorros")

        if (escolha == 1) {

            window.location.href = "./cr05.html"

        } else if (escolha == 2) {

            window.location.href = "./cr07.html"
        } else {
            alert('Escolha errada! \n Digite 1 ou 2')
        }
    }
}