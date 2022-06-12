var numero = window.prompt("¿De qué valor necesitas el factorial?");
numero = parseInt(numero);
var factorial = 1;

if(numero === 0 || numero ===1){
    factorial = 1;
    }else{
    console.log('Use While');
    while(numero !=0){
    factorial = factorial * numero;
    numero--;
}
}
console.log("El resultado del factorial es:",factorial)

