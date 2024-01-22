let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// maneira melhor para alterar textos do html

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}


function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  if(chute == numeroSecreto) {
    
    exibirTextoNaTela('h1', 'ACERTOU!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('P', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if(chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor!');
    } else {
      exibirTextoNaTela('p', 'O número é maior!')
    }
    tentativas++;
    limparCampo();
    
    
  }
}

//parseInt pega parte inteiro do numero

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let qteDeElementoNaLista = listaDeNumeroSorteado.length;

  if (qteDeElementoNaLista == numeroLimite) {
    listaDeNumeroSorteado = [];
  }

  if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumeroSorteado.push(numeroEscolhido);
    console.log(listaDeNumeroSorteado);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
