/*
1) Faça um algoritmo que dado as 3 rotas tiradas por um aluno
em um semestre da faculdade calcule e imprima a
sua media e a sua classificação conforme a tabela abaixo.

Média = ( nota 1 + nota 2 + nota 3) / 3;

classificação:
- Média menor que 5, reprovação; (Média < 5);
- Média entre 5 e 7, recuperação; (Média >= 5 and <= 7);
- Média acima de 7, passou de semestre;( Média > 7);
*/

const nota1 = 6;
const nota2 = 6;
const nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3;
console.log("Média do Semestre: " + media.toFixed(2));
if (media > 7) {
    console.log("Passou de Semestre");
} else if (media >= 5 && media == 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}