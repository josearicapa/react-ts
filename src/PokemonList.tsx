import React = require('react');
import { useState } from 'react';

export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const loadPokemonList = async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=20'
      );
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    loadPokemonList();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <p>The numbers of pokemons are: {pokemonList.length}</p>
      <div className="container">
        {pokemonList.map((pokemon, index) => (
          <div className="card">
            <img
              src={`"https://pokeapi.co/api/v2/pokemon/${index}/`}
              alt={pokemon.name}
            />
            <h2>{pokemon.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
