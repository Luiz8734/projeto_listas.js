(use "git add <file>..." to include in what will be committed)
        README.md
        img/
        index.html
        index.js
        scr/
        styles.cssimport { criarItemDaLista } from "./scr/criarItemDaLista.js";
import verificarListaVazia from "./scr/verificarListaVazia.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");



botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);;
})


verificarListaVazia(listaDeCompras);