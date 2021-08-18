function escolhaUsuario(){ 
var escolha = ""
        while (escolha != 1 && escolha != 2) {
          escolha = prompt("Qual é sua escolha? \n 1 - Volta do meio do caminho para buscar o capacete \n 2 - Continua mesmo sem o capacete")
        
        if (escolha == 1) {
        
          window.location.href = "./cr02.html"
        
        } else if (escolha == 2) {
        
          window.location.href = "./cr03.html"
        }
        else {alert('Escolha errada! \n Digite 1 ou 2')} 
        }
    }