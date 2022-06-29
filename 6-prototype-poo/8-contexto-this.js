// Ejemplo global
console.log(this); // Window

// Ejemplo en una funcion
console.log('Hola yo soy', this);

// Ejemplo en una funcion en modo estricto
function sayHello(){
    'use strict'
    console.log('Hola yo soy', this);
}

// This en objetos y asigancion sobre una variable

const person = {
    name: 'Jose',
    sayHello: function(){
        console.log(`Hola soy ${this.name}`)
        console.log('this: ', this);
    }
}
person.sayHello();

const accion = person.sayHello();
accion();