import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "./graphql/getPokemons";
import Pokemon from "./Pokemon";
import "./Pokemons.css";

function PokemonsContainer() {
	const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
		variables: { first: 151 },
	});

	return (
		<div className="pokemons">
			{pokemons &&
				pokemons.map((pokemon) => (
					<Pokemon key={pokemon.id} pokemon={pokemon} />
				))}
		</div>
	);
}

export default PokemonsContainer;
