const botaoMenu = document.querySelector("#menu-botao");
const menu = document.querySelector("#menu");
const linksMenu = document.querySelectorAll("#menu a");

// Abre e fecha o menu de navegação.
botaoMenu.addEventListener("click", () => {
  const menuEstaAberto = menu.classList.toggle("aberto");

  botaoMenu.setAttribute("aria-expanded", menuEstaAberto);

  botaoMenu.setAttribute(
    "aria-label",
    menuEstaAberto ? "Fechar menu" : "Abrir menu"
  );
});

// Fecha o menu depois que uma opção é selecionada.
linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  });
});

// Mostra o ano atual automaticamente no rodapé.
const elementoAno = document.querySelector("#ano");

elementoAno.textContent = new Date().getFullYear();



































































































































