const botao = document.getElementById("usuarioBotao");
const menu = document.getElementById("menuUsuario");

botao.addEventListener("click", (e) => {
    e.stopPropagation(); // impede que o clique propague pro document
    menu.classList.toggle("d-none");
    botao.classList.toggle("ativo");
});

document.addEventListener("click", (e) => {
    if (!botao.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add("d-none");
        botao.classList.remove("ativo");
    }
});
