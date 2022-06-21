// const ulElement = document.getElementById('list-languages');
// getElementById
// getElementByClassName
// getElementByTagName
const STATUS = {
    STAND_BY: 'standBy',
    START: 'start',
    FINISHED:'finished'

};
const ulElement = document.querySelector('#list-languages'); // obteenr elemento de la lista
const formElement = document.querySelector('#language-form'); //obtener el formlario
let languages = [];
// id => #
// class => .
// tag => nameTag

formElement.addEventListener('submit', (event) => {  //Obtener los datos y agregarlos al arreglo

    // evitar que el formulario se envie por defecto

    event.preventDefault(); // Para que no se recargue el formulario

    // obtener los elementos html

    const languageInputElement = event.target.languageElement; // guardar elemento input
    const radiosNodeList = event.target.statusRadioElement;
    const statusElement = Array.from(radiosNodeList).find(element => element.checked); // conversion de nodelist a un array

    // obtener los value de los elementos html y guardarlos en variables

    const languageText = languageInputElement.value;
    const statusText = statusElement.value;

    // Creacion de objeto

    const language = { description: languageText, status: statusText, };

    languages.push(language);
    cleanView(); //limpiar contenido de ulElement
    renderListLanguages(languages); //ForEach line 42
});

const cleanView = () => {
    ulElement.innerHTML = '';
};

const renderListLanguages = (languages) => {
    languages.forEach(renderElementList);
};


const renderElementList = (element, index) => { // iterrar la llamada a la funcion 

    // creación de los elementos HTML,agregar clases y atributos

    const liElement = document.createElement('li');
    const divElement = document.createElement('div');
    const iElement = document.createElement('i');
    const buttonElement = document.createElement('button');

    // agregar las clases css a los elementos 

    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');

    // agregar tipo de icono

    setIconType(iElement, element.status);

    buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger');
    buttonElement.setAttribute('type', 'submit');
    buttonElement.setAttribute('index', index);

    // agregar texto a un elemento

    liElement.innerHTML = element.description;

    // agregar al html, para mostrarlos en la pnatalla

    ulElement.appendChild(liElement);
    liElement.appendChild(divElement);
    divElement.appendChild(iElement);
    divElement.appendChild(buttonElement);
};

const setIconType = (iElement, status) => {

    //destructuring
const{STAND_BY, START, FINISHED} = STATUS;
    iElement.classList.add('bi', 'bi-pause-circle-fill');
    if (status === STAND_BY) {
        iElement.classList.add('text-warning');

    } else if (status === START) {
        iElement.classList.add('text-primary');

    } else if (status === FINISHED) {
        iElement.classList.add('text-success');

    }

};


