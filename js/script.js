/** Navigation menu */

const nav = document.querySelector("nav");
const botaoMenu = document.querySelector(".botao-hamburguer");

botaoMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/** Search form */

const botaoPesquisa = document.querySelector("label");
const inputPesquisa = document.querySelector("input");
const fecharPesquisa = document.querySelector("form button");

const toggleElements = () => {
  inputPesquisa.classList.toggle("active");
  fecharPesquisa.classList.toggle("active");
};

botaoPesquisa.onclick = () => toggleElements();
fecharPesquisa.onclick = () => toggleElements();

inputPesquisa.addEventListener("keydown", (event) => {
  if (event.key === "Escape") toggleElements();
});
