/* 
3) Eçabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Ultilize os códigos da tabela a seguir para ler qual a condição de pagamento escolida e efutuar o calculo
adequado.

Codigo Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto; (preçoEtiqueta - 10%)
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto; (preçoEtiqueta - 15%)
3 - Em dua vezes, preço normal de etiqueta sem juros;(preçoEtiqueta)
4 - Acima de Duas vezes, preço normal de etiqueta mais juros de 10%;(preçoEtiqueta + 10%)
*/

const preçoEtiqueta = 100;
const tipoPagamento = 1;

const desconto = preçoEtiqueta * (10 / 100);

if (tipoPagamento === 1) {
    console.log("Valor a ser Pago no Débito: " + (preçoEtiqueta - (preçoEtiqueta * 0.1)).toFixed(2));
} else if (tipoPagamento === 2) {
    console.log("Valor a ser Pago no Dinheiro ou Pix: " + (preçoEtiqueta - (preçoEtiqueta * 0.15)).toFixed(2));
} else if (tipoPagamento == '3') {
    console.log("Valor a ser Pago em 2x: " + ((preçoEtiqueta).toFixed(2)));
} else {
    console.log("Valor a ser Pago em mais de 2x: " + (preçoEtiqueta + (preçoEtiqueta * 0.1)).toFixed(2));
}
