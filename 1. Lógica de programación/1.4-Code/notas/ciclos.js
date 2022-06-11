/**
 * Problema
 * Imprimir numeros pares del 1-20
 * Exceptuando el 18.
*/

// while
// do - while
// for

// inicio, condicion , razon de cambio

var i = 0; // Inicio 
while (i <= 20){ //Condicion
    if(i % 2 === 0 && i !== 18){
    console.log('numero:',i);
    }
  //Razon de cambio
  //i = i+1;
  //i+=1; //Operador de asignacion suma
  i++; //Operador de incremento
}

/*
== // compara valores
=== // compara tipo de dato
*/

for(var j= 0; j <=20; j++){
    if(j % 2 === 0 && j !== 18){
    console.log('numero for:',j);
    }
  //Es donde se ejecuta la razon de cambio
}

//Inicio
var k=0;
do{
    if(k % 2 === 0 && k !== 18){
    console.log('numero do while:',k);
    }
    // Razon de cambio
    k++;
    } while(k<=20)

//Inicio
var posicion = 0;
var arr = [0, 2, 4, 6, 8, 10];
do{
    console.log('numero:', arr[posicion]);
    posicion++;
}while(posicion < arr.length && valor !==0)