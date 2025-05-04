// Retorne no console todas as imagens do site

const imagensSite = document.querySelectorAll("img");
console.log(imagensSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensNome = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensNome);

// Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector(".animais-descricao h2");
console.log(h2Animais);

// Selecione o último p do site

const paragrafos = document.querySelectorAll("p");
const ultimoParagrafo = paragrafos[paragrafos.length - 1];
console.log(ultimoParagrafo);
