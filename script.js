//Lista com caminho para imagens dos gatos
let imagensGatos = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg"
];

//lista das DIVs que representam as cartas
let cartas = document.querySelectorAll(".card");
//Primeira carta a ser selecionada
let carta1;
//Segunda carta a ser selecionada
let carta2;

//Duplico a lista de imagens de gatos (imagensGatos)
let imagens = imagensGatos.concat(imagensGatos);

//Função que embaralha a lista de imagens (já duplicadas)
const cartasEmbaralhadas = embaralhar(imagens);

//Função que insere as imagens embaralhadas nas cartas
inserirImagemNaCarta();
// Função de Iniciar
play();

function embaralhar(listaImagens) {
  // criei duas variaveis indefinidas
  let imagemSelecionada;
  let posicaoAleatoria;
  // Faz um LOOP na lista para embaralhar
  for (let posicao = listaImagens.length - 1; posicao !== 0; posicao--) {
    posicaoAleatoria = Math.floor(Math.random() * posicao);

    imagemSelecionada = listaImagens[posicao];
    listaImagens[posicao] = listaImagens[posicaoAleatoria];
    listaImagens[posicaoAleatoria] = imagemSelecionada;
  }

  return listaImagens;
}
// Faço um LOOP nas divs e insiro as imagens em cada uma, usando o style e backGroundImage
function inserirImagemNaCarta() {
  for (let carta of cartas) {
    carta.style.backgroundImage = `url('${
      cartasEmbaralhadas[Number(carta.id)]
    }')`;
  }
}
// Faço um LOOP nas divs e insiro as imagens em cada uma, usando o style e backGroundImage
function inserirImagemDeVerso() {
  for (let carta of cartas) {
    carta.style.backgroundImage = `url('img/itachi.jpeg')`;
    // Adiciono o evento clik em todas as cartas
    adicionarEventoDeClick(carta);
  }
}
//Adiciono o evento clik em todas as cartas
function adicionarEventoDeClick(carta) {
  // Verifico se a carta é TRUE
  if (carta) {
    carta.addEventListener("click", function(event) {
      cartasCorretas(event);
    });
  }
}

// Funções para mostrar o verso da carta
function fecharCarta(carta) {
  carta.style.backgroundImage = "url('img/itachi.jpeg')";
  carta.onclick = null;
}
// Função para mostrar a Frente da carta
function abrirCarta(carta) {
  carta.style.backgroundImage = `url('${imagens[Number(carta.id)]}')`;
  carta.onclick = null;
}

// Faz as cartas não funcionar com o click
function cartaParacima() {
  for (let carta of cartas) {
    carta.onclick = null;
  }
}
// Função fecha todas as cartas erradas
function cartaParabaixo() {
  for (let carta of cartas) {
    if (!carta.classList.contains("certa")) {
      fecharCarta(carta);
    }
  }
}

// Indentificar as cartas selecionadas, usando 2 funções
function cartasCorretas(event) {
  abrirCarta(event.target);
  if (carta1) {
    carta2 = event.target;
    cartaParacima();
    verificarCartas();
  } else {
    carta1 = event.target;
  }
}
// Função compara as cartas iguais, se for igual trava as 2 para cima
function verificarCartas() {
  if (carta1.style.backgroundImage !== carta2.style.backgroundImage) {
    setTimeout(function() {
      fecharCarta(carta1);
      fecharCarta(carta2);
      confereCartas();
    }, 2000);
  } else {
    carta1.classList.add("certa");
    carta2.classList.add("certa");
    confereCartas();
  }
}
// Confiro apos cada jogada
function confereCartas() {
  carta1 = null;
  carta2 = null;
  cartaParabaixo();
}
// Função iniciar o jogo
function play() {
  setTimeout(function() {
    inserirImagemDeVerso();
    cartaParabaixo();
    adicionarEventoDeClick();
  }, 2000);
}
