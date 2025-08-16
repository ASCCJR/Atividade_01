/**
 * Avalia um número e retorna a string 'Fizz', 'Buzz', 'FizzBuzz' ou o próprio número.
 * Esta é uma função pura que encapsula a lógica principal do FizzBuzz.
 * - Múltiplos de 3 retornam "Fizz".
 * - Múltiplos de 5 retornam "Buzz".
 * - Múltiplos de ambos (15) retornam "FizzBuzz".
 *
 * @param {number} numero - O número a ser avaliado.
 * @returns {string|number} A string correspondente ('Fizz', 'Buzz', 'FizzBuzz') ou o número original.
 */
function getFizzBuzzValue(numero) {
  // O operador de módulo (%) retorna o resto de uma divisão.
  // Se `numero % x` é 0, significa que `numero` é um múltiplo de `x`.
  // A verificação de 15 é feita primeiro, pois é o caso mais específico.
  // Se verificássemos 3 ou 5 primeiro, nunca chegaríamos à condição 'FizzBuzz'.
  if (numero % 15 === 0) {
    return 'FizzBuzz';
  } else if (numero % 3 === 0) {
    return 'Fizz';
  } else if (numero % 5 === 0) {
    return 'Buzz';
  } else {
    return numero;
  }
}

/**
 * Função principal que executa o programa FizzBuzz, iterando de 1 a 100.
 * Orquestra a execução e exibe os resultados no console.
 */
function executarFizzBuzz() {
  console.log("--- Desafio FizzBuzz (1 a 100) ---");

  // Loop que itera de 1 até 100 (inclusive).
  for (let i = 1; i <= 100; i++) {
    // Para cada número 'i', chama a função de lógica para obter o valor correto.
    const resultado = getFizzBuzzValue(i);
    // Exibe o resultado no console.
    console.log(resultado);
  }
}

// Inicia o programa chamando a função principal.
executarFizzBuzz();
