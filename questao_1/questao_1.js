
/**
 * Função principal
 */
function iniciarTabuada() {
  // 1. RESPONSABILIDADE: Obter a entrada do usuário.
  const numeroString = prompt("Digite um número para ver a sua tabuada de multiplicação:");

  // 2. RESPONSABILIDADE: Tratar a entrada e os casos de erro.

  // Se o usuário clicou em "Cancelar", o prompt retorna null.
  if (numeroString === null) {
    console.log("Operação cancelada pelo usuário.");
    return; // Encerra a função aqui.
  }

  // Converte a entrada para um número.
  const numero = parseInt(numeroString);

  // Se a conversão resultar em NaN (Not-a-Number), a entrada é inválida.
  if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número.");
    return; // Encerra a função aqui.
  }

  // 3. RESPONSABILIDADE: Gerar e exibir o resultado.
  console.log(`Tabuada de multiplicação do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Inicia o programa ao chamar a função principal.
iniciarTabuada();