// Cardápio demonstrativo. Edite os pratos neste objeto para usar o cardápio real.
const cardapio = [
  { dia: "Segunda", dataDia: 1, refeicao: "Arroz, feijão, frango assado e salada", acompanhamento: "Farofa", sobremesa: "Banana" },
  { dia: "Terça", dataDia: 2, refeicao: "Arroz, feijão, carne moída e legumes", acompanhamento: "Macarrão", sobremesa: "Melancia" },
  { dia: "Quarta", dataDia: 3, refeicao: "Arroz, feijão, peixe ao forno e salada", acompanhamento: "Purê de batata", sobremesa: "Maçã" },
  { dia: "Quinta", dataDia: 4, refeicao: "Arroz, feijão, frango ensopado e verduras", acompanhamento: "Cuscuz", sobremesa: "Laranja" },
  { dia: "Sexta", dataDia: 5, refeicao: "Arroz, feijão, carne de panela e salada", acompanhamento: "Macaxeira cozida", sobremesa: "Melão" }
];

const pratos = cardapio.map(item => item.refeicao);
const chaveVotos = "ifpi-cardapio-votos-v1";
let votos = carregarVotos();

function carregarVotos() {
  try {
    return JSON.parse(localStorage.getItem(chaveVotos)) || {};
  } catch {
    return {};
  }
}

function salvarVotos() {
  localStorage.setItem(chaveVotos, JSON.stringify(votos));
}

function obterDiaAtual() {
  // JavaScript: 0 = domingo; 1 = segunda; ...; 6 = sábado.
  const indice = new Date().getDay() - 1;
  return indice >= 0 && indice < 5 ? indice : -1;
}

function renderizarCardapio() {
  const area = document.getElementById("dias-cardapio");
  const hoje = obterDiaAtual();
  const data = new Date();
  document.getElementById("data-hoje").textContent =
    data.toLocaleDateString("pt-BR", { day: "2-digit", month: "long" });

  area.innerHTML = cardapio.map((item, indice) => `
    <article class="dia-card ${indice === hoje ? "hoje" : ""}">
      <div class="dia-cabecalho">
        <h3>${item.dia}</h3>
        ${indice === hoje ? '<span class="selo-hoje">HOJE</span>' : ""}
      </div>
      <div class="prato"><strong>Prato principal</strong><span>${item.refeicao}</span></div>
      <div class="prato"><strong>Acompanhamento</strong><span>${item.acompanhamento}</span></div>
      <div class="prato"><strong>Sobremesa</strong><span>${item.sobremesa}</span></div>
    </article>
  `).join("");
}

function renderizarAvaliacoes() {
  const area = document.getElementById("lista-avaliacao");
  area.innerHTML = cardapio.map((item, indice) => {
    const voto = votos[indice] || "";
    return `
      <article class="item-avaliacao">
        <div><strong>${item.dia}</strong><small>${item.refeicao}</small></div>
        <div class="botoes-voto" aria-label="Avaliar prato de ${item.dia}">
          <button class="botao-voto ${voto === "gostei" ? "selecionado" : ""}"
            data-indice="${indice}" data-voto="gostei"
            aria-label="Gostei do prato de ${item.dia}" aria-pressed="${voto === "gostei"}">👍</button>
          <button class="botao-voto ${voto === "nao-gostei" ? "selecionado" : ""}"
            data-indice="${indice}" data-voto="nao-gostei"
            aria-label="Não gostei do prato de ${item.dia}" aria-pressed="${voto === "nao-gostei"}">👎</button>
        </div>
      </article>`;
  }).join("");

  area.querySelectorAll("button[data-voto]").forEach(botao => {
    botao.addEventListener("click", () => {
      const indice = botao.dataset.indice;
      const novoVoto = botao.dataset.voto;
      // Clicar novamente no mesmo botão remove o voto; clicar no outro altera.
      votos[indice] = votos[indice] === novoVoto ? "" : novoVoto;
      if (!votos[indice]) delete votos[indice];
      salvarVotos();
      renderizarAvaliacoes();
      renderizarGrafico();
    });
  });
}

function renderizarGrafico() {
  const area = document.getElementById("grafico");
  area.innerHTML = cardapio.map((item, indice) => {
    // Nesta versão demonstrativa, cada navegador registra um voto por prato.
    const voto = votos[indice];
    const gostei = voto === "gostei" ? 1 : 0;
    const naoGostei = voto === "nao-gostei" ? 1 : 0;
    const total = gostei + naoGostei;
    const percentualGostei = total ? (gostei / total) * 100 : 0;
    const percentualNaoGostei = total ? (naoGostei / total) * 100 : 0;
    return `
      <div class="linha-grafico">
        <span class="nome-grafico">${item.dia}</span>
        <div class="barra-fundo" role="img" aria-label="${gostei} votos gostei e ${naoGostei} votos não gostei">
          <div class="barra-sim" style="width: ${percentualGostei}%"></div>
          <div class="barra-nao" style="width: ${percentualNaoGostei}%"></div>
        </div>
        <span class="contagem">${gostei} 👍 / ${naoGostei} 👎</span>
      </div>`;
  }).join("");
}

renderizarCardapio();
renderizarAvaliacoes();
renderizarGrafico();
