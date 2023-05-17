import React from "react";
import Pokemon from './Pokemon'
import { useEffect, useState } from "react";

function PokemonList({ searchTerm = "" }) {
  const [pokemons, setPokemon] = useState([])
  useEffect(()=>{
    async function loadPokemon(){
       const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        const data = await response.json()
        setPokemon(data.results)
      }
    loadPokemon()
  }, [])


  return (
    <ul>
    {
      pokemons?.map((pokemon, index)=>{
        if(pokemon.name.includes(searchTerm)){
          return <Pokemon poke={pokemon} />
        }
        return null
      })
    }
    </ul>
  );
}

export default PokemonList;
