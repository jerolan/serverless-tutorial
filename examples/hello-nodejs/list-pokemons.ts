export type Pokemon = {
  name: string;
  url: string;
};

interface PokemonStore {
  (): Promise<Pokemon[]>;
}

export default async function listPokemons(
  queryPokemons: PokemonStore
): Promise<Pokemon[]> {
  const pokemons = await queryPokemons();
  return pokemons;
}
