// console.log("TESTE");

// const botaoPedir = document.querySelector(".btn-pedir");
// console.log(botaoPedir.classList);
// botaoPedir.innerHTML = "Selecione os 3 itens para fechar o pedido";

function selecionarItem(itemSelecionado) {
  const regexPrato = /prato/;
  const regexBebida = /bebida/;
  const regexSobremesa = /sobremesa/;

  console.log(itemSelecionado);

  if (regexPrato.test(itemSelecionado)) {
    const pratoSelecionado = document.querySelector(".pratos .selecionado");
    if (pratoSelecionado !== null) {
      pratoSelecionado.classList.remove("selecionado");
    }
  }

  if (regexBebida.test(itemSelecionado)) {
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");
    if (bebidaSelecionada !== null) {
      bebidaSelecionada.classList.remove("selecionado");
    }
  }

  if (regexSobremesa.test(itemSelecionado)) {
    const sobremesaSelecionada = document.querySelector(
      ".sobremesas .selecionado"
    );
    if (sobremesaSelecionada !== null) {
      sobremesaSelecionada.classList.remove("selecionado");
    }
  }

  const seletor = document.querySelector(itemSelecionado);
  seletor.classList.add("selecionado");
}
