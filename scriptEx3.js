// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu ul li");
console.log(itensMenu);

itensMenu.forEach((item) => item.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => item.classList.remove("ativo"));
itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll("img");

imagens.forEach((item, index) => {
  if (item.hasAttribute("alt")) {
    console.log(index, "tem alt");
  } else console.log(index, "n tem alt");
});

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('.menu ul li [href^="http"]');

// linkExterno.href = "https://google.com";

linkExterno.setAttribute("href", "https://www.google.com/");

console.log(linkExterno.attributes.href);
