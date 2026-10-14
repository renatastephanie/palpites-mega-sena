// FUNÇÕES AUXILIARES
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// LÓGICA DO SORTEIO
function gerarJogo() {
  const lista = [];

  while (lista.length < 6) {
    const num = randInt(1, 60);

    if (!lista.includes(num)) {
      lista.push(num);
    }
  }

  lista.sort((a, b) => a - b);

  return lista;
}

// MANIPULAÇÃO DO DOM

// Atualiza os números exibidos no card principal
function exibirNumeros(numeros) {
  const container = document.getElementById("numeros-container");
  container.innerHTML = "";

  numeros.forEach((num) => {
    const span = document.createElement("span");
    span.classList.add("numero");
    span.textContent = num;
    container.appendChild(span);
  });
}

// Adiciona um jogo ao historico
function adicionarHistorico(jogo, indice) {
  const lista = document.getElementById("historico-lista");

  // Remove a mensagem "Nenhum palpite ainda." na primeira vez
  const vazio = lista.querySelector("historico-vazio");
  if (vazio) vazio.remove();

  const li = document.createElement("li");
  li.classList.add("historico__item");
  li.innerHTML = `
    <strong>Jogo ${indice + 1}</strong>
    <span>${jogo.join(" - ")}</span
  `;

  // Insere o mais recente no topo da lista
  lista.prepend(li);
}

// FUNÇÃO PRINCIPAL
async function sortear() {
  const entrada = prompt("Quantos jogos você quer que eu sorteie? ");
  const quant = parseInt(entrada, 10);

  if (isNaN(quant) || quant <= 0) {
    alert("Por favor, informe um número válido!");
    return;
  }

  const jogos = [];

  for (let tot = 0; tot < quant; tot++) {
    const jogo = gerarJogo();
    jogos.push(jogo);
  }

  for (let i = 0; i < jogos.length; i++) {
    exibirNumeros(jogos[i]);
    adicionarHistorico(jogos[i], i);

    await sleep(1000);
  }
}

// FUNÇÃO LIMPAR
function limpar() {
  const container = document.getElementById("numeros-container");
  container.innerHTML = `
    <span class="numero placeholder">?</span>
    <span class="numero placeholder">?</span>
    <span class="numero placeholder">?</span>
    <span class="numero placeholder">?</span>
    <span class="numero placeholder">?</span>
    <span class="numero placeholder">?</span>
  `;

  const lista = document.getElementById("historico-lista");
  lista.innerHTML = '<li class="historico-vazio"> Nenhum palpite ainda.</li>';
}

// EVENTOS DOS BOTÕES
document.getElementById('btn-sortear').addEventListener('click', sortear)
document.getElementById('btn-limpar').addEventListener('click', limpar)
