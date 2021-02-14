const computadorOpcoes = ["Pedra","Papel","Tesoura"];
const jogadorOpcoes = ["Pedra","Papel","Tesoura"]

let jogadorPontos = 0
let computadorPontos = 0

function game(rounds) {
//rounds = 5
    
    for (let i = 1; i<=rounds; i++) {

    function computadorJoga(){

let resultadoPc = computadorOpcoes[Math.floor(Math.random() * computadorOpcoes.length)];
let resultadoJg = jogadorOpcoes[Math.floor(Math.random() * jogadorOpcoes.length)];        //leves mudanças para fazer o jogador escolher umas das 3 opções aleatoriamente
return resultadoPc,resultadoJg;

}

//const jogadorEscolha = "Pedra";
const jogadorEscolha = computadorJoga()
const computadorEscolha = computadorJoga()

//Condições para vitória/derrota e incremento aos pontos.   
function jogarRodada(jogadorEscolha,computadorEscolha){
    if (jogadorEscolha == "Pedra" && computadorEscolha == "Pedra") {
        jogadorPontos += 0
        computadorPontos += 0
        return "Empate!"

    } else if (jogadorEscolha == "Pedra" && computadorEscolha == "Papel"){
        computadorPontos +=1
        return `Voce Perdeu! ${computadorEscolha} vence de ${jogadorEscolha}`
        
    } else if (jogadorEscolha == "Pedra" && computadorEscolha == "Tesoura"){
        jogadorPontos += 1
        return `Voce Ganhou! ${jogadorEscolha} vence de ${computadorEscolha} `
        
    }   else if (jogadorEscolha == "Papel" && computadorEscolha == "Papel"){
        jogadorPontos += 0
        computadorPontos += 0
        return "Empate!"

    }  else if (jogadorEscolha == "Papel" && computadorEscolha == "Tesoura"){
        computadorPontos += 1
        return `Voce Perdeu! ${computadorEscolha} vence de ${jogadorEscolha}`

    }  else if (jogadorEscolha == "Papel" && computadorEscolha =="Pedra"){
        jogadorPontos +=1
        return `Voce Ganhou! ${jogadorEscolha} vence de ${computadorEscolha} `

    } else if (jogadorEscolha == "Tesoura" && computadorEscolha == "Tesoura"){
        jogadorPontos += 0
        computadorPontos += 0
        return "Empate!"

    } else if (jogadorEscolha == "Tesoura" && computadorEscolha == "Papel"){
        jogadorPontos += 1
        return `Voce Ganhou! ${jogadorEscolha} vence de ${computadorEscolha} `

    }  else if (jogadorEscolha == "Tesoura" && computadorEscolha == "Pedra"){
        computadorPontos += 1
        return `Voce Perdeu! ${computadorEscolha} vence de ${jogadorEscolha}`

    }
 
    
}
console.log(jogarRodada(jogadorEscolha, computadorEscolha));


//Imprimindo os pontos
}
    console.log("Voce tem " + jogadorPontos + " Pontos!")
    console.log("O computador tem " + computadorPontos + " Pontos!")

}

game(5);


function resetarPontuacao(){
    jogadorPontos = 0;
    computadorPontos = 0;
    alert("Pontuação zerada!")
}