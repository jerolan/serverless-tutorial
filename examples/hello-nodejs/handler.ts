import rest from "./rest";
import listPokemons from "./list-pokemons";

export async function lambda(event) {
  const pokemons = await listPokemons(rest);

  return {
    statusCode: 200,
    body: JSON.stringify(pokemons),
  };
}
