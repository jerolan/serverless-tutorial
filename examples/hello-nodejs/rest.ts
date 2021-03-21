import fetch from "node-fetch";
import { Pokemon } from "./list-pokemons";

type GetPokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

export default async function rest() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json: GetPokemonResponse = await response.json();
  return json.results;
}
