
const numero = 0;

const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0){
    console.log("Numero Invalido");
} // if se usa na condição "se".
else if (numeroDivisivelPor5){
    console.log("Sim");
} // else if se usa na condição de "se não se". 
else {
    console.log("Não");
}//else se usa junto com if na condição de "se não".

/* se caso vc nao queira usar o else, pode fazer com if em forma de Negação usando "!"
a fente da variavel.
ex: if (!numeroPar){
    console.log('Impar');
}*/
