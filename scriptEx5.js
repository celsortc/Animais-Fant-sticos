// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll("a");

function verificaClasse(event) {
  event.preventDefault();
  if (event.currentTarget.classList.contains("ativo")) {
    return;
  } else {
    links.forEach((link) => {
      if (link.classList.contains("Ativo")) {
        link.classList.remove("Ativo");
      }
    });
    event.currentTarget.classList.add("Ativo");
  }

  console.log(event.target);
}

links.forEach((item) => {
  item.addEventListener("click", verificaClasse);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
