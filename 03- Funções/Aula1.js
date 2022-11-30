// para declarar uma função vc usa function nome da função(){};
// para chamar uma function, nome da função();
// função qie nao devolve nada chamamos de procedimento.( não tem retorno)

function sayMyName(name){
    console.log('Your name is:' + name);
}

function quadrado(valor){
   return valor * valor;
}

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
 }
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
sayMyName('Everton');
sayMyName('Ferreira');
const quadradoDeDez = quadrado(10);
console.log(quadrado(10) + quadrado(10));
console.log(quadradoDeDez);

// organizar os codigos.

function calcularJuros(){

}

function main(){
    console.log('Programa Principal');
    calcularJuros();
}

main();

//Quando declaramos uma função, ela é como se fosse uma "variavel", atraves do nome dela conseguimos invocar a funçao.
// função no Javascript é valor tbm.como se fosse objeto que conseguimos manupular. é um objeto do tipo function.
