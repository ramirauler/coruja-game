function escolhaUsuario(){ 
var escolha = ""
        while (escolha != 1 && escolha != 2) {
          escolha = prompt("Qual é sua escolha? \n 1 - Para e conversa com a Coruja Resiliente  \n 2 - Não obedece a ordem de parada e continua  ")
        
        if (escolha == 1) {
        
          window.location.href = "./cr02.html"
        
        } else if (escolha == 2) {
        
          window.location.href = "./cr03.html"
        }
        else {alert('Escolha errada! \n Digite 1 ou 2')} 
        }
    }