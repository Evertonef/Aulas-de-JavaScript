
const numero = 5;

const isNumeroEPar = (numero % 5) === 0;
/* usamos o "is" no inicio de uma variavel booleana, a convenção pede para usar
 "is" fica no sentido "é ou não é" */
if (isNumeroEPar){
    console.log("O Número é Par");
} // if se usa na condição "se".
// else if (numeroDivisivelPor5){
//    console.log("Sim");
//} // else if se usa na condição de "se não se". 
else {
    console.log("O Número é impar");
}//else se usa junto com if na condição de "se não".

/* se caso vc nao queira usar o else, pode fazer com if em forma de Negação usando "!"
a fente da variavel.
ex: if (!numeroPar){
    console.log('Impar');
}*/
