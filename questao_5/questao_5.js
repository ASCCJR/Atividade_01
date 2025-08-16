/**
 * Objeto que define as funções de conversão disponíveis.
 * A estrutura aninhada (ex: celsius.fahrenheit) permite uma busca clara da fórmula.
 * Adicionar novas unidades (como Kelvin) seria tão simples quanto adicionar
 * novas chaves e funções a este objeto.
 */
const conversoes = {
  celsius: {
    fahrenheit: (valor) => (valor * 9/5) + 32,
  },
  fahrenheit: {
    celsius: (valor) => (valor - 32) * 5/9, // Problema, quando coloca 1.8 ao inves de 5/9, a linha 45 vem como resultado 324°C ao inves de 100°C
  },
};

/**
 * Converte uma temperatura de uma unidade para outra (ex: Celsius para Fahrenheit).
 *
 * @param {object} conv - O objeto de conversão.
 * @param {number} conv.valor - O valor da temperatura a ser convertida.
 * @param {string} conv.de - A unidade de origem ('Celsius' ou 'Fahrenheit').
 * @param {string} conv.para - A unidade de destino ('Celsius' ou 'Fahrenheit').
 * @returns {number|string} O resultado da conversão formatado para duas casas decimais
 *                          ou uma mensagem de erro.
 */
function converterTemperatura(conv) {
  // 1. Validação do objeto de entrada.
  if (!conv || typeof conv.valor !== 'number' || !conv.de || !conv.para) {
    return "Erro: Objeto de conversão inválido. Forneça { valor, de, para }.";
  }

  const { valor, de, para } = conv;
  const deUnit = de.toLowerCase();
  const paraUnit = para.toLowerCase();

  // 2. Lógica de conversão.
  // Se as unidades de origem e destino são as mesmas, não é preciso converter.
  if (deUnit === paraUnit) {
    return valor;
  }

  // Busca a função de conversão no objeto 'conversoes'.
  const funcaoDeConversao = conversoes[deUnit] && conversoes[deUnit][paraUnit];

  if (funcaoDeConversao) {
    const resultado = funcaoDeConversao(valor);
    // Arredonda o resultado para 2 casas decimais para melhor legibilidade.
    return parseFloat(resultado.toFixed(2));
  } else {
    // Se a combinação de unidades não for encontrada, retorna um erro.
    return "Erro: Unidades de conversão não reconhecidas. Use 'Celsius' e 'Fahrenheit'.";
  }
}

// --- Exemplos de Uso ---
console.log("--- Testando o Conversor de Temperatura ---");

// Conversões válidas
console.log(`100°C para F = ${converterTemperatura({ valor: 100, de: 'Celsius', para: 'Fahrenheit' })}°F`);
console.log(`212°F para C = ${converterTemperatura({ valor: 212, de: 'Fahrenheit', para: 'Celsius' })}°C`);
console.log(`0°C para F = ${converterTemperatura({ valor: 0, de: 'Celsius', para: 'Fahrenheit' })}°F`);
console.log(`32°F para C = ${converterTemperatura({ valor: 32, de: 'Fahrenheit', para: 'Celsius' })}°C`);
console.log(`10°C para C = ${converterTemperatura({ valor: 10, de: 'Celsius', para: 'Celsius' })}°C`);

// --- Testes de Erro ---
console.log("\n--- Testando Casos de Erro ---");
console.log(`Kelvin para Celsius = ${converterTemperatura({ valor: 10, de: 'Kelvin', para: 'Celsius' })}`);
console.log(`Objeto incompleto = ${converterTemperatura({ valor: 10, de: 'Celsius' })}`);