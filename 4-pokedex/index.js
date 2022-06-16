let pokemons = [];


const getPokemons = async () => {
    //fetch(‘https://pokeapi.co/api/v2/pokemon/ditto’)
    //.then(response => response.json())
    //.then(data => console.log(data));
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const responseJson = await response.json();
    const pokemons = responseJson.results;
    for (const element of pokemons) {
        const response = await fetch(element.url);
        const responseJson = await response.json(); //conversion a json
        normalizePokemonData(element.name, imgResponseJson);
        console.log('img: ', img);
    };
};

const normalizePokemonData = (name, imgResponseJson) => {
    const img = responseJson?.sprites?.other['oficial-atwork'].front_default || '';
    const pokemon = {name: name, img: img};
    pokemons.push(pokemon);
};

const renderCardPokemon = () => {
    const cardPokemonDiv = docuent.createElement('div');
    const pokemonImg = docuent.createElement('img');
    const brElement = docuent.createElement('br');
    const pokemonNameSpan = docuent.createElement('span');
}

getPokemons();
console.log(pokemons);