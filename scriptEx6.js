// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const menuClone = menu.cloneNode(true);
const copy = document.querySelector(".copy");

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq

// como eu fiz
// const primeiroDt = document.querySelector(".faq dl dt:first-child");
// console.log(primeiroDt.innerText);

// otimizado
const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");

console.log(primeiroDt.innerText);

// Selecione o DD referente ao primeiro DT

const proximoDD = primeiroDt.nextElementSibling;

console.log(proximoDD.innerHTMLs);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector(".animais");
//como eu fiz
// const html = document.querySelector("body");

// html.replaceChild(animais, faq);

faq.innerHTML = animais.innerHTML;
