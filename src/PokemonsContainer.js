import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "./graphql/getPokemons";
import Pokemon from "./Pokemon";
import "./Pokemons.css";

function PokemonsContainer() {
	const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
		variables: { first: 151 },
	});

	const [totalPages, setTotalPages] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage, setPokemonsPerPage] = useState(16);

	let indexOfLastPokemon = currentPage * pokemonPerPage;
	let indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
	let currentPokemons = pokemons.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon
	);

	const handleNext = () => {
		setCurrentPage(currentPage + 1);
	};

	const handlePrevious = () => {
		setCurrentPage(currentPage - 1);
	};

	useEffect(() => {
		if (window.screen.width < 480) {
			setTotalPages(51);
			setPokemonsPerPage(3);
		}

		if (window.screen.width < 860 && window.screen.width > 480) {
			setTotalPages(19);
			setPokemonsPerPage(8);
		}
	}, []);

	return (
		<div>
			<div className="pokemons__pagination">
				<button disabled={currentPage == 1} onClick={handlePrevious}>
					Previous
				</button>

				<h1> POKEDEX </h1>
				<button
					disabled={currentPage == totalPages}
					onClick={handleNext}
				>
					Next
				</button>
			</div>
			<div className="pokemons">
				{pokemons &&
					currentPokemons.map((pokemon) => (
						<Pokemon key={pokemon.id} pokemon={pokemon} />
					))}
			</div>
		</div>
	);
}

export default PokemonsContainer;
