import pokemonApi from '@/api/pokemonApi';

export const getPokemons = () => {
  // crear un arreglo basado en:
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((_, index) => index + 1);
};

export const getPokemonNames = async ([pokemon1, pokemon2, pokemon3, pokemon4]) => {
  const promiseArr = [
    pokemonApi.get(`/${pokemon1}`),
    pokemonApi.get(`/${pokemon2}`),
    pokemonApi.get(`/${pokemon3}`),
    pokemonApi.get(`/${pokemon4}`),
  ];
  const [pokem1, pokem2, pokem3, pokem4] = await Promise.all(promiseArr);
  return [
    { name: pokem1.data.name, id: pokem1.data.id },
    { name: pokem2.data.name, id: pokem2.data.id },
    { name: pokem3.data.name, id: pokem3.data.id },
    { name: pokem4.data.name, id: pokem4.data.id },
  ];
};

export const getPokemonOptions = async () => {
  const mixtedPokemons = getPokemons()
    .sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonNames(mixtedPokemons.splice(0, 4));
  return pokemons;
};

export default getPokemonOptions;
