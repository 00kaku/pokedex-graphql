import React from "react";

function Pokemon({ pokemon }) {
	console.log(pokemon);
	return (
		<div className="pokemon">
			<div className="pokemon__header">
				<h2>
					{" "}
					#{pokemon.number} {pokemon.name.toUpperCase()}
				</h2>
			</div>

			<div className="pokemon__body">
				<img src={pokemon.image} />
			</div>
			<div className="pokemon__footer">
				<div className="pokemon__footerType">
					{pokemon.types.map((type) => (
						<h4>
							<span
								className={`type ${type.toLowerCase()}`}
							></span>
						</h4>
					))}
				</div>
			</div>
		</div>
	);
}

export default Pokemon;
