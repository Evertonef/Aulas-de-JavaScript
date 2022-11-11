// Faça um programa para calcular o valor de uma viagem.
// você terá 3 variaveis. sendo elas:
// * 1 Preço do Combustível;
// * 2 Gasto Médio de Combustivel do carro por KM;
// * 3 Distancia em KM da Viagem;
//Imprimir no console o valor que será gasto para realizar esta viagem;


const precoCombustivel = 4.79;
const kmPorLitros = 12;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGastoParaViagem = litrosConsumidos * precoCombustivel;

console.log('Gastei R$' + valorGastoParaViagem.toFixed(2) + ' em Combustivel na minha Viagem!'); 
/* .toFixed('numero' de casas decimais depois da '.' que deseja exibir!
Ex: .toFixed(3)); o resultado "2.999";
*/

