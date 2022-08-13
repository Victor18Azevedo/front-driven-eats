const telefonePedido = 5585997492998;
let pratoNome;
let bebidaNome;
let sobremesaNome;
let pratoPreco;
let bebidaPreco;
let sobremesaPreco;
let precoTotal;

function selecionarItem(itemSelecionado) {
  const pratoAnterior = document.querySelector(".pratos .selecionado");
  const bebidaAnterior = document.querySelector(".bebidas .selecionado");
  const sobremesaAnterior = document.querySelector(".sobremesas .selecionado");

  //Verifica se selecao eh prato
  if (itemSelecionado.classList.contains("prato")) {
    //Remove selecao anterior
    if (pratoAnterior) {
      pratoAnterior.classList.remove("selecionado");
      const icon = pratoAnterior.querySelector(".icon-check");
      icon.classList.remove("icon-check");
    }

    //Realiza selecao atual
    itemSelecionado.classList.add("selecionado");
    const icon = itemSelecionado.querySelector("ion-icon");
    icon.classList.add("icon-check");

    //Atualza valores Nome e Preco
    pratoNome = itemSelecionado.querySelector(".item-nome").innerHTML;
    pratoPreco = Number(
      itemSelecionado.querySelector(".item-preco").innerHTML.replace(",", ".")
    );
  }

  //Verifica se selecao eh bebida
  if (itemSelecionado.classList.contains("bebida")) {
    //Remove selecao anterior
    if (bebidaAnterior) {
      bebidaAnterior.classList.remove("selecionado");
      const icon = bebidaAnterior.querySelector(".icon-check");
      icon.classList.remove("icon-check");
    }

    //Realiza selecao atual
    itemSelecionado.classList.add("selecionado");
    const icon = itemSelecionado.querySelector("ion-icon");
    icon.classList.add("icon-check");

    //Atualza valores Nome e Preco
    bebidaNome = itemSelecionado.querySelector(".item-nome").innerHTML;
    bebidaPreco = Number(
      itemSelecionado.querySelector(".item-preco").innerHTML.replace(",", ".")
    );
  }

  //Verifica se selecao eh sobremesa
  if (itemSelecionado.classList.contains("sobremesa")) {
    //Remove selecao anterior
    if (sobremesaAnterior) {
      sobremesaAnterior.classList.remove("selecionado");
      const icon = sobremesaAnterior.querySelector(".icon-check");
      icon.classList.remove("icon-check");
    }

    //Realiza selecao atual
    itemSelecionado.classList.add("selecionado");
    const icon = itemSelecionado.querySelector("ion-icon");
    icon.classList.add("icon-check");

    //Atualza valores Nome e Preco
    sobremesaNome = itemSelecionado.querySelector(".item-nome").innerHTML;
    sobremesaPreco = Number(
      itemSelecionado.querySelector(".item-preco").innerHTML.replace(",", ".")
    );
  }

  precoTotal = pratoPreco + bebidaPreco + sobremesaPreco;
  const pedidoMensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${pratoNome}
- Bebida: ${bebidaNome}
- Sobremesa: ${sobremesaNome}
Total: R$ ${precoTotal.toFixed(2)}`;

  //Habilita botao (Fazer Pedido) caso um item cada categorias esteja selecionado
  if (
    document.querySelector(".pratos .selecionado") &&
    document.querySelector(".bebidas .selecionado") &&
    document.querySelector(".sobremesas .selecionado")
  ) {
    const btn = document.querySelector(".btn-container");
    btn.innerHTML = `<a href='https://wa.me/${telefonePedido}?text=${encodeURIComponent(
      pedidoMensagem
    )}' target=_blank><button class="btn-pedir btn-submit">Fazer o pedido</button></a>`;
  }
}
