

 function createPersona(name, altura, colorPiel){
    this.name = name;
    this.altura = altura;
    this.alias = alias;
    this.colorPiel = colorPiel;
};

function createSuperHumano(superpoder, tipo, alias){
    this.superpoder = superpoder;
    this.tipo = tipo;
    this.alias = alias;

};

function createPanadero(isComerciante, hasMAndil){
    this.isComerciante = isComerciante;
    this.hasMAndil = hasMAndil;
};

createSuperHumano.prototype.volar = () => {
    console.log('volar');
};

    const flash = new createSuperHumano("super velocidad", "super heroe", "flash");
    const mujerMaravilla = new createSuperHumano("super fuerza", "super heroe", "mujerMaravilla");
    console.log(flash);
    console.log(mujerMaravilla);


/**
 * 1. Se cambia var por const ya que es mas correcto limitar el alcance de las variables.
 * 2. El objeto literal es remplazado por la sintaxis this
 * 3. El return de la funcion constructora se elimina, ya que al llamar a la funcion 
 * constructora con new, implicitamente nos retorna un objeto con las propiedades asignadas
 * en el this
 */