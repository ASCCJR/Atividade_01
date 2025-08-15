/**
 * Converte uma temperatura de Celsius para Fahrenheit ou vice-versa.
 * @param {object} conv - O objeto de conversão.
 * @param {number} conv.valor - O valor da temperatura a ser convertida.
 * @param {string} conv.de - A unidade de origem ('Celsius' ou 'Fahrenheit').
 * @param {string} conv.para - A unidade de destino ('Celsius' ou 'Fahrenheit').
 * @returns {string|number} O resultado da conversão formatado ou uma mensagem de erro.
 */

// Função principal para conversão de temperatura
function converterTemperatura(conv) {
  // 1. Validação do objeto e suas propriedades
  if (!conv || typeof conv.valor !== 'number' || !conv.de || !conv.para) {
    return "Erro: Objeto de conversão inválido. Forneça { valor, de, para }.";
  }

  // Extrai as propriedades do objeto para variáveis locais.
  const { valor, de, para } = conv;
  const deUnit = de.toLowerCase();    // Garante comparação sem diferenciar maiúsculas/minúsculas
  const paraUnit = para.toLowerCase(); // Garante comparação sem diferenciar maiúsculas/minúsculas

  let resultado;

  // 2. Lógica de conversão
  if (deUnit === 'celsius' && paraUnit === 'fahrenheit') { // Celsius para Fahrenheit
    resultado = (valor * 9/5) + 32;
  } else if (deUnit === 'fahrenheit' && paraUnit === 'celsius') { // Fahrenheit para Celsius
    resultado = (valor - 32) * 5/9; // Problema, quando coloca 1.8 ao inves de 5/9, a linha 45 vem como resultado 324°C ao inves de 100°C
  } else if (deUnit === paraUnit) {
    // Se as unidades são as mesmas, não há conversão a fazer.
    resultado = valor;
  } else {
    return "Erro: Unidades de conversão não reconhecidas. Use 'Celsius' e 'Fahrenheit'.";
  }

  // 3. Retorna o resultado arredondado para 2 casas decimais para melhor leitura.
  return parseFloat(resultado.toFixed(2));
}

// ----------------------
// Exemplos de Uso
// ----------------------
console.log("Testando o conversor de temperatura:");

// Conversões válidas
console.log(`100°C para F = ${converterTemperatura({ valor: 100, de: 'Celsius', para: 'Fahrenheit' })}°F`);
console.log(`212°F para C = ${converterTemperatura({ valor: 212, de: 'Fahrenheit', para: 'Celsius' })}°C`);
console.log(`0°C para F = ${converterTemperatura({ valor: 0, de: 'Celsius', para: 'Fahrenheit' })}°F`);
console.log(`32°F para C = ${converterTemperatura({ valor: 32, de: 'Fahrenheit', para: 'Celsius' })}°C`);
console.log(`10°C para C = ${converterTemperatura({ valor: 10, de: 'Celsius', para: 'Celsius' })}°C`); // Mesma unidade

// Testes de erro
console.log(`Kelvin para Celsius = ${converterTemperatura({ valor: 10, de: 'Kelvin', para: 'Celsius' })}`); // Unidade inválida
console.log(`Objeto incompleto = ${converterTemperatura({ valor: 10, de: 'Celsius' })}`); // Objeto inválido