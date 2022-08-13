const telefonePedido = 5583981129704;

function selecionarItem(itemSelecionado) {
  const regexPrato = /prato/;
  const regexBebida = /bebida/;
  const regexSobremesa = /sobremesa/;

  const pratoAnterior = document.querySelector(".pratos .selecionado");
  const bebidaAnterior = document.querySelector(".bebidas .selecionado");
  const sobremesaAnterior = document.querySelector(".sobremesas .selecionado");

  //Se item for prato
  if (regexPrato.test(itemSelecionado)) {
    if (pratoAnterior !== null) {
      pratoAnterior.classList.remove("selecionado");
      const icon = pratoAnterior.querySelector(".icon-check");
      icon.classList.remove("icon-check");
    }
    const pratoSelecionado = document.querySelector(itemSelecionado);
    pratoSelecionado.classList.add("selecionado");
    const icon = pratoSelecionado.querySelector("ion-icon");
    icon.classList.add("icon-check");
  }

  //Se item for bebida
  if (regexBebida.test(itemSelecionado)) {
    if (bebidaAnterior !== null) {
      bebidaAnterior.classList.remove("selecionado");
      const icon = bebidaAnterior.querySelector(".icon-check");
      icon.classList.remove("icon-check");
    }
    const bebidaSelecionado = document.querySelector(itemSelecionado);
    bebidaSelecionado.classList.add("selecionado");
    const icon = bebidaSelecionado.querySelector("ion-icon");
    icon.classList.add("icon-check");
  }

  //Se item for sobremesa
  if (regexSobremesa.test(itemSelecionado)) {
    if (sobremesaAnterior !== null) {
      sobremesaAnterior.classList.remove("selecionado");
      const icon = sobremesaAnterior.querySelector(".icon-check");
      icon.classList.remove("icon-check");
    }
    const sobremesaSelecionado = document.querySelector(itemSelecionado);
    sobremesaSelecionado.classList.add("selecionado");
    const icon = sobremesaSelecionado.querySelector("ion-icon");
    icon.classList.add("icon-check");
  }

  //Hablita botao apos a escolha dos 3 itens
  if (
    document.querySelector(".pratos .selecionado") !== null &&
    document.querySelector(".bebidas .selecionado") !== null &&
    document.querySelector(".sobremesas .selecionado") !== null
  ) {
    const pedidoMensagem = mensagem();
    1;
    const btn = document.querySelector(".btn-container");
    btn.innerHTML = `<a href='https://wa.me/${telefonePedido}?text=${encodeURIComponent(
      pedidoMensagem
    )}' target=_blank><button class="btn-pedir btn-submit">Fazer o pedido</button></a>`;
  }
}

function mensagem() {
  //Nome dos itens selecionados
  const pratoNome = document.querySelector(
    ".pratos .selecionado .item-nome"
  ).innerHTML;
  const bebidaNome = document.querySelector(
    ".bebidas .selecionado .item-nome"
  ).innerHTML;
  const sobremesaNome = document.querySelector(
    ".sobremesas .selecionado .item-nome"
  ).innerHTML;

  //Preco Total:
  const pratoPreco = Number(
    document
      .querySelector(".pratos .selecionado .valor")
      .innerHTML.replace(",", ".")
  );
  const bebidaPreco = Number(
    document
      .querySelector(".bebidas .selecionado .valor")
      .innerHTML.replace(",", ".")
  );
  const sobremesaPreco = Number(
    document
      .querySelector(".sobremesas .selecionado .valor")
      .innerHTML.replace(",", ".")
  );
  const precoTotal = pratoPreco + bebidaPreco + sobremesaPreco;

  const pedidoMensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${pratoNome}
- Bebida: ${bebidaNome}
- Sobremesa: ${sobremesaNome}
Total: R$ ${precoTotal}`;

  return pedidoMensagem;
}
