const numeros = [10, 20, 30, 40, 50, 60];

//Continue y break aplican para while/for/do-while/for-in/for-of

for (let i = 0; i < numeros.length; i++) {

    /*if(numeros[i] >= 40){
       //break; // rompe ejecucion 
    }*/

    if (numeros[i] == 40) {
        continue; // salta el codigo que esta a continuacion y sigue con la siguiente iteracion
    }
    console.log(numeros[i]);
}