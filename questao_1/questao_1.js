/**
 * Gera as linhas da tabuada de multiplicação para um número específico.
 * Esta é uma função "pura", o que significa que seu resultado depende apenas
 * de suas entradas e não tem efeitos colaterais (como imprimir no console).
 *
 * @param {number} numero - O número para o qual a tabuada será gerada.
 * @returns {string[]} Um array de strings, onde cada string é uma linha da tabuada.
 *                     Ex: ["5 x 1 = 5", "5 x 2 = 10", ...].
 */
function gerarTabuada(numero) {
  const tabuada = [];
  for (let i = 1; i <= 10; i++) {
    tabuada.push(`${numero} x ${i} = ${numero * i}`);
  }
  return tabuada;
}

/**
 * Função principal que orquestra a interação com o usuário e a exibição da tabuada.
 * Suas responsabilidades são:
 * 1. Obter a entrada do usuário.
 * 2. Validar a entrada.
 * 3. Chamar a função `gerarTabuada` para a lógica de negócio.
 * 4. Exibir o resultado formatado no console.
 */
function iniciarTabuada() {
  // 1. Obter a entrada do usuário.
  const numeroString = prompt("Digite um número para ver a sua tabuada de multiplicação:");

  // 2. Validar a entrada.
  // Se o usuário clicou em "Cancelar", o prompt retorna null.
  if (numeroString === null) {
    console.log("Operação cancelada pelo usuário.");
    return; // Encerra a execução.
  }

  // Converte a string para um número inteiro.
  const numero = parseInt(numeroString);

  // Verifica se a conversão resultou em NaN (Not-a-Number), indicando uma entrada inválida.
  if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número válido.");
    return; // Encerra a execução.
  }

  // 3. Gerar a tabuada (lógica de negócio).
  const tabuadaResultados = gerarTabuada(numero);

  // 4. Exibir o resultado.
  console.log(`Tabuada de multiplicação do ${numero}:`);
  tabuadaResultados.forEach(linha => {
    console.log(linha);
  });
}

// Inicia o programa ao chamar a função principal.
iniciarTabuada();