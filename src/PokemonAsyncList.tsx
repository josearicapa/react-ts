import React = require('react');

export const PokemonAsyncList = () => {
  const [pokemonList, setPokemonList] = React.useState([]);

  const loadFetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
      .then((result) => result.json())
      .then((data) => setPokemonList(data.results));
  };

  const loadAsyncPokemon = async () => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5');
    const data = await result.json();
    setPokemonList(data.results);
  };

  React.useEffect(() => {
    //loadFetchPokemon();
    loadAsyncPokemon();
  }, []);
  return (
    <div>
      <p>Cantidad de pokemons: {pokemonList.length}</p>
    </div>
  );
};
