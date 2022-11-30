
function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return "Status: Abaixo do Peso!";
    } else if (imc >= 18.5 && imc < 25) {
        return "Status: Peso Normal!";
    } else if (imc >= 25 && imc < 30) {
        return "Status: Acima do Peso!";
    } else if (imc >= 30 && imc < 40) {
        return "Status: Obeso!";
    } else {
        return "Status: Obesidade Grave!";
    } 

}
//Main
(function (){
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura); //Math é uma biblioteca de utilitarios de funçoes Matematicas.
    console.log(classificarImc(imc));
})(); // função imediatamento invocada. usamos na parte da web para isolar a função / escopo.

//main();
