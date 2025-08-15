/**
 * Função que aplica a lógica FizzBuzz para um único número.
 * Recebe um número e retorna a string correspondente ou o próprio número.
 * @param {number} numero - O número a ser avaliado.
 * @returns {string|number} 'FizzBuzz', 'Fizz', 'Buzz' ou o número original.
 */

/** 
 * Para ser múltiplo de ambos, precisa ser múltiplo de 3 * 5 = 15.
 * No PDF era colocado == 0. A diferença é que == faz comparação apenas de valor, enquanto === compara valor e tipo.
 * Portanto, é melhor usar === para evitar problemas de comparação.
 */

// Função que encapsula a lógica FizzBuzz, ou seja, determina se um número é Fizz, Buzz ou FizzBuzz.
function getFizzBuzzValue(numero) {
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
 * Função principal que executa o programa FizzBuzz de 1 a 100.
 * Sua responsabilidade é orquestrar a execução e exibir os resultados.
 */
function executarFizzBuzz() {
  console.log("Iniciando o desafio FizzBuzz:");

  for (let i = 1; i <= 100; i++) {
    // Pega o resultado da função pura e o exibe no console.
    const resultado = getFizzBuzzValue(i);
    console.log(resultado);
  }
}

// Inicia o programa.
executarFizzBuzz();
