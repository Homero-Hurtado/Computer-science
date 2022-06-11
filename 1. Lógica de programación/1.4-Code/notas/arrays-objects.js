//Tipado fuerte vs tipado debil
//int numero = 7; vs var numero = 7;
//String numero = "jose"; vs var numero = "jose";

//Tipos de datros primitivos
var nombre = "Homero"; //String
var numero = 5; //Numero
var decimal= 10.5; //Numero decimal
var flag = "true"; //Booleando

//Tipos de datosa compuestos
var arr = [0, 10, 20, 30, 40, 'Steve', true, {name: 'data'}, 100]; //Arreglo
var student = { id: 1,
                name: 'Homero Hurtado',
               calificaciones: [10, 8, 9]}; //Objeto

console.log(nombre);
console.log(arr[0]); //10
console.log(arr[4]); //40
console.log(arr[8]); //100
console.log(student.name)//nombre del estudiante
console.log(arr[7].name);//data
console.log(student.calificaciones[1]);//Calificacopn de 8 del estudiante
