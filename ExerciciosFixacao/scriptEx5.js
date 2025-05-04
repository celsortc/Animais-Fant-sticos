// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll("a[href^='#']");

function verificaClasse(event) {
  event.preventDefault();
  if (event.currentTarget.classList.contains("ativo")) {
    return;
  } else {
    links.forEach((link) => {
      link.classList.remove("Ativo");
    });
  }
  event.currentTarget.classList.add("Ativo");
  console.log(event.target);
}

links.forEach((item) => {
  item.addEventListener("click", verificaClasse);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

function elemento(event) {
  console.log(event.target);
}

todosElementos.forEach((item) => {
  item.addEventListener("click", elemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function removeElemento(event) {
  // event.target.remove();
}

todosElementos.forEach((item) => {
  item.addEventListener("click", removeElemento);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
  console.log(event.key);

  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);
