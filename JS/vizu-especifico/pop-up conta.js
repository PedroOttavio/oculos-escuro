const container = document.querySelector(".usuario-menu-container");
const botao     = document.getElementById("usuarioBotao");
const menu      = document.getElementById("menuUsuario");

botao.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("d-none");
    botao.classList.toggle("ativo");
    container.classList.toggle("ativo");    // <- adicionado
});

document.addEventListener("click", (e) => {
    if (!botao.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add("d-none");
        botao.classList.remove("ativo");
        container.classList.remove("ativo"); // <- adicionado
    }
});
