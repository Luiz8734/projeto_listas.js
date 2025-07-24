const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia")

function verificarListaVazia (listaDeCompras){
    const ItensDaLista = listaDeCompras.querySelector("li");
    if(ItensDaLista.length === 0){
        mensagemListaVazia.style.display = "block"
    }else{
        mensagemListaVazia.style.display = "none"
    }
}
export default verificarListaVazia