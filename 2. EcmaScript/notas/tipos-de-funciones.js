// 1 Arrow function

const suma = (num1, num2) => {
    return num1 + num2;
}

// 2 funciones anonimas

const arr = [];
arr.forEach(function(element){
    console.log(element);
})


// 3 funciones autoinvocadas IIFE

var name = 'Homero';

(function () {
    console.log('bienvenido', name);
})();

(function () {
    console.log('BYE!!');
})();

(() => {
    console.log('Bye');
})();

/*
(//contenido, mediante una funcion aninima o flecha)//() ejecutar el contenido

(() => {

})()

(function(){
    
})()

  */
