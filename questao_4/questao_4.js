/**
 * Executa uma operação matemática simples (+, -, *, /) usando uma estrutura switch-case.
 * A função valida se as entradas são números e se o operador é válido.
 *
 * @param {*} a - O primeiro valor (deve ser um número).
 * @param {*} b - O segundo valor (deve ser um número).
 * @param {string} operacao - O operador da cálculo a ser usado ('+', '-', '*', '/').
 * @returns {number|string} O resultado da operação ou uma mensagem de erro.
 */
function calculadora(a, b, operacao) {
  // 1. Validação das entradas: verifica se 'a' e 'b' são números.
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Erro: Ambos os valores devem ser números.";
  }

  // 2. Lógica de operação usando a estrutura switch-case.
  switch (operacao) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      // Tratamento especial para o caso de divisão por zero.
      if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
      }
      return a / b;
    default:
      // Caso o operador não seja nenhum dos esperados.
      return "Erro: Operação inválida. Use '+', '-', '*', ou '/'.";
  }
}

// --- Exemplos de Uso ---
console.log("--- Testando a Calculadora (Switch-Case) ---");

// Operações válidas
console.log(`10 + 5 = ${calculadora(10, 5, '+')}`);       // Soma
console.log(`10 - 5 = ${calculadora(10, 5, '-')}`);       // Subtração
console.log(`10 * 5 = ${calculadora(10, 5, '*')}`);       // Multiplicação
console.log(`10 / 5 = ${calculadora(10, 5, '/')}`);       // Divisão
console.log(`3 / 2 = ${calculadora(3, 2, '/')}`);         // Divisão com decimal

// --- Testes de Erro ---
console.log("\n--- Testando Casos de Erro ---");
console.log(`10 / 0 = ${calculadora(10, 0, '/')}`);       // Divisão por zero
console.log(`'a' + 5 = ${calculadora('a', 5, '+')}`);     // Input não numérico
console.log(`10 % 5 = ${calculadora(10, 5, '%')}`);       // Operador inválido
