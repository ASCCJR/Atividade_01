/**
 * Avalia um objeto 'pessoa' para determinar se a idade corresponde à maioridade (18 anos ou mais).
 * A função também valida o objeto de entrada para garantir que ele contenha as propriedades
 * 'nome' (string) e 'idade' (number).
 *
 * @param {object} pessoa - O objeto representando a pessoa.
 * @param {string} pessoa.nome - O nome da pessoa.
 * @param {number} pessoa.idade - A idade da pessoa em anos.
 *
 * @returns {string} Uma string formatada indicando o status de maioridade
 *                   (ex: "Carlos é maior de idade.") ou uma mensagem de erro
 *                   se o objeto for inválido.
 */
function verificarIdade(pessoa) {
  // --- Validação de Entrada ---
  // 1. Verifica se o objeto 'pessoa' é nulo ou indefinido.
  // 2. Verifica se as propriedades 'idade' e 'nome' existem e têm os tipos corretos.
  // O operador '!' significa negação (NOT).
  // O operador '||' significa "ou" (OR), então a verificação para se qualquer condição for verdadeira.
  if (!pessoa || typeof pessoa.idade !== 'number' || typeof pessoa.nome !== 'string') {
    return "Objeto inválido. Forneça um objeto com as propriedades 'nome' (string) e 'idade' (number).";
  }

  // --- Lógica de Negócio ---
  // Compara a idade com o limite de maioridade (18).
  if (pessoa.idade >= 18) {
    return `${pessoa.nome} é maior de idade.`;
  } else {
    return `${pessoa.nome} é menor de idade.`;
  }
}

// --- Exemplos de Uso ---
console.log("--- Verificação de Maioridade ---");

// Cenário 1: Pessoa maior de idade.
const pessoa1 = { nome: 'Carlos', idade: 28 };
console.log(verificarIdade(pessoa1)); // Esperado: "Carlos é maior de idade."

// Cenário 2: Pessoa menor de idade.
const pessoa2 = { nome: 'Ana', idade: 17 };
console.log(verificarIdade(pessoa2)); // Esperado: "Ana é menor de idade."

// Cenário 3: Pessoa com idade igual a 18.
const pessoa3 = { nome: 'Mariana', idade: 18 };
console.log(verificarIdade(pessoa3)); // Esperado: "Mariana é maior de idade."

// --- Testes de Erro ---
console.log("\n--- Testando Casos de Erro ---");

// Cenário 4: Objeto com propriedade faltando ('idade').
console.log(verificarIdade({ nome: 'Jonas' })); // Esperado: Mensagem de erro.

// Cenário 5: Objeto com tipo de dado incorreto para 'idade'.
console.log(verificarIdade({ nome: 'Luiza', idade: '25' })); // Esperado: Mensagem de erro.

// Cenário 6: Objeto nulo.
console.log(verificarIdade(null)); // Esperado: Mensagem de erro.