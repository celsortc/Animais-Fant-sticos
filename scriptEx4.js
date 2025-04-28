// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector("img");

console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens

const todasImagens = document.querySelectorAll("img");

let total = 0;
todasImagens.forEach((item) => {
  const imgRect = item.getBoundingClientRect();
  total += imgRect.width;
});

console.log(total);

// no meu não deu esse problema, mas caso o javascript rode antes das imagens carregarem, pode dar erro no calculo
// por isso se usa o seguinte comando
// window.onload = function() {
//   poderia por uma função aqui ou algo para acontecer somente após o site todo carregar
// }

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const verificaTamanhoLinks = document.querySelectorAll("a");

verificaTamanhoLinks.forEach((item) => {
  const altura = item.offsetHeight;
  const largura = item.offsetWidth;

  if (largura >= 48 && altura >= 48) {
    console.log(
      "O link",
      item.innerHTML,
      "Possui o minimo recomendado para telas utilizadas com o dedo"
    );
  } else
    console.log(
      `o link ${item.innerHTML} possui ${altura} de altura e ${largura} de largura, logo não possui o minimo recomendado para mobile`
    );
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const verificaBrowser = window.matchMedia("(max-width: 720px)").matches;

if (verificaBrowser) {
  console.log("browser menor que 720px");
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
} else {
  console.log("browser maior que 720px");
}
