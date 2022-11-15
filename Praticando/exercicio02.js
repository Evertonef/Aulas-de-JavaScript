/*
2)O IMC - Indice de Massa Corporal é um critério da Organização
Mundial de Saúde para dar uma indicação sobre 
a condição de peso de ma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura);

Elabore um algoritmo que dado o peso a e altura de um adulto mostre sua condição
de acordo com a tabela abaixo:

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso; (IMC < 18.5); 
- Entre 18.5 e 25 Peso Normal; (IMC === 18.5 && IMC <= 25);
- Entre 25 e 30 Acima do Peso; (IMC === 25 && IMC <= 30);
- Entre 30 e 40 Obeso; (IMC === 30 && IMC <= 40);
- Acima de 40 Obesidade Grave; (IMC > 40);
*/

const peso = 70;
const altura = 1.50;
const imc = peso / Math.pow(altura, 2); //Math é uma biblioteca de utilitarios de funçoes Matematicas.
console.log("IMC = " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Status: Abaixo do Peso!");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Status: Peso Normal!");
} else if (imc >= 25 && imc < 30) {
    console.log("Status: Acima do Peso!");
} else if (imc >= 30 && imc < 40) {
    console.log("Status: Obeso!");
}
else {
    console.log("Status: Obesidade Grave!");
} 
