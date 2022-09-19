import pokemonApi from '@/api/pokemonApi';

describe('pokemonApi', () => {
  it('axios debe estar configurado con el baseUrl', () => {
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
  });
});
