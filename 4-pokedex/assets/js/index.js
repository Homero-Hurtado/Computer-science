const mainDiv = document.querySelector('#container-pokemons');
const NOT_IMAGE_TEXT = 'la imagen del pokemon';
let globalPokemons = [];

const getPokemons = async () => {
    //fetch(‘https://pokeapi.co/api/v2/pokemon/ditto’)
    //.then(response => response.json())
    //.then(data => console.log(data));
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    //const response = await fetch('./assets/kanto.json');
    const responseJson = await response.json();
    const pokemons = responseJson.results;
    for (const element of pokemons) {
        const response = await fetch(element.url);
        const imgResponseJson = await response.json();
        normalizePokemonData(element.name, imgResponseJson)
    };
};

const normalizePokemonData = (name, imgResponseJson) => {
    const img = imgResponseJson?.sprites?.other['oficial-artwork']?.front_default || '';
    const pokemon = {name: name, img: img};
    globalPokemons.push(pokemon);
};

const renderCardPokemon = (element, index) => {

    const cardPokemonDiv = document.createElement('div');
    const pokemonImg = document.createElement('img');
    const brElement = document.createElement('br');
    const pokemonNameSpan = document.createElement('span');

    cardPokemonDiv.className = 'venter';
    pokemonImg.className = 'icon-region';
    pokemonImg.setAttribute('src', element.img);
    pokemonImg.setAttribute('alt', NOT_IMAGE_TEXT);

    mainDiv.appendChild(cardPokemonDiv);
    cardPokemonDiv.appendChild(pokemonImg);
    cardPokemonDiv.appendChild(brElement);
    cardPokemonDiv.appendChild(pokemonNameSpan);
    pokemonNameSpan.innerHTML = element.name;

}

const renderPokemons = (pokemons) => {
    pokemons.forEach(renderCardPokemon);
}

//1 Funcion convencional en JS
async function main(){
    await getPokemons();
    renderPokemons(globalPokemons);
}
main();

//2 Forma de funciones Arrow/Flecha
// const main = async () => {
//     await getPokemons();
//     renderCardPokemons(pokemons);
// }

//3 IIFE
// (async() => {
//     await getPokemons();
//     renderPokemons(pokemons);
// })();