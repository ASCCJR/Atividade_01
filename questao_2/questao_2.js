/**
 * Recebe um objeto pessoa e retorna uma string indicando se é maior de idade.
 * @param {object} pessoa - O objeto contendo os dados da pessoa.
 * @param {string} pessoa.nome - O nome da pessoa.
 * @param {number} pessoa.idade - A idade da pessoa.
 * @returns {string} A string com o status da maioridade.
 */

/* Função para verificar a idade
 * ! significa negação 
 * === significa comparação estrita (compara valor e tipo)
 * || significa "ou" (operador lógico OR)
 */
function verificarIdade(pessoa) {
  if (!pessoa || typeof pessoa.idade === 'undefined' || typeof pessoa.nome === 'undefined') {
    return "Objeto inválido. Forneça um objeto com as propriedades 'nome' e 'idade'.";
  }

  if (pessoa.idade >= 18) {
    return `${pessoa.nome} é maior de idade.`;
  } else {
    return `${pessoa.nome} é menor de idade.`;
  }
}

// --- Exemplos de Uso ---

// 1. Criando os objetos
const pessoa1 = { nome: 'Carlos', idade: 28 };
const pessoa2 = { nome: 'Ana', idade: 17 };
const pessoa3 = { nome: 'Mariana', idade: 18 };

console.log("Verificando as idades:");

// 2. Chamando a função e passando o valor de retorno para o console.log
console.log(verificarIdade(pessoa1));
console.log(verificarIdade(pessoa2));
console.log(verificarIdade(pessoa3));

// Exemplo de objeto inválido
console.log(verificarIdade({ nome: 'Jonas' })); // Sem a propriedade idade