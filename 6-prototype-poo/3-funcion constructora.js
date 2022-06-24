function createSuperHumano(superpoder, tipo, alias){
    // var superhumano = {
    //     superpoder: superpoder,
    //     tipo: tipo,
    //     alias: alias
    //     };
    //     return superhumano;
    this.superpoder = superpoder
    this.tipo = tipo
    this.alias = alias
    };

    var flash = createSuperHumano("super velocidad", "super heroe", "flash");
    var mujerMaravilla = createSuperHumano("super fuerza", "super heroe", "mujer maravilla" );
    console.log(flash);
    console.log(mujerMaravilla);


/**
 * 1. Se cambia var por const ya que es mas correcto limitar el alcance de las variables.
 * 2. El objeto literal es remplazado por la sintaxis this
 * 3. El return de la funcion constructora se elimina, ya que al llamar a la funcion 
 * constructora con new, implicitamente nos retorna un objeto con las propiedades asignadas
 * en el this
 */
