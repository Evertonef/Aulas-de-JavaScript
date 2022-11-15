/*
Faça um program,a para calcular o valor de uma viagem.

Você terá 5 variaveis. Sendo elas:
1- Preço do etanol;
2- Preço da gasolina;
3- P tipo de combustível do caro por KM;
4- Gasto médio de combustível do carro por KM;
5- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/


const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';
const distanciaEmKm = 100;
const kmPorLitros = 12;

const litrosConsumidos = distanciaEmKm / kmPorLitros;


if (tipoCombustivel === 'Etanol') {
    const valorGastoParaViagem = litrosConsumidos * precoEtanol;
    console.log('Gastei R$' + valorGastoParaViagem.toFixed(2) + ' em Etanol na minha Viagem!');
} else {
    const valorGastoParaViagem = litrosConsumidos * precoGasolina;
    console.log('Gastei R$' + valorGastoParaViagem.toFixed(2) + ' em Gasolina na minha Viagem!');
}
