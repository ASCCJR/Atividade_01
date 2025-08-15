/**
 * Executa uma operação matemática simples (+, -, *, /).
 * A função valida as entradas e a operação, retornando o resultado
 * ou uma mensagem de erro.
 * @param {*} a - O primeiro valor.
 * @param {*} b - O segundo valor.
 * @param {string} operacao - O operador (+, -, *, /).
 * @returns {number|string} O resultado da operação ou uma string de erro.
 */
function calculadora(a, b, operacao) {
  // 1. Validação das entradas
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Erro: Ambos os valores devem ser números.";
  }

  // 2. Lógica de operação usando switch
  switch (operacao) {
    case '+': // Soma
      return a + b;
    case '-': // Subtração
      return a - b;
    case '*': // Multiplicação
      return a * b;
    case '/': // Divisão
      if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
      }
      return a / b;
    default: // Operador inválido
      return "Erro: Operação inválida. Use '+', '-', '*', ou '/'.";
  }
}

// --- Exemplos de Uso ---
console.log("Testando a calculadora:");

// Operações válidas
console.log(`10 + 5 = ${calculadora(10, 5, '+')}`);       // Soma
console.log(`10 - 5 = ${calculadora(10, 5, '-')}`);       // Subtração
console.log(`10 * 5 = ${calculadora(10, 5, '*')}`);       // Multiplicação
console.log(`10 / 5 = ${calculadora(10, 5, '/')}`);       // Divisão
console.log(`3 / 2 = ${calculadora(3, 2, '/')}`);         // Divisão com decimal

// Testes de erro
console.log(`10 / 0 = ${calculadora(10, 0, '/')}`);       // Divisão por zero
console.log(`'a' + 5 = ${calculadora('a', 5, '+')}`);     // Input não numérico
console.log(`10 % 5 = ${calculadora(10, 5, '%')}`);       // Operador inválido
