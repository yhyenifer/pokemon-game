import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture.vue';

describe('PokemonPicture component', () => {
  it('debe hacer match con el snapshot', () => {
    const wraper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });
    expect(wraper.html()).toMatchSnapshot();
  });

  it('debe mostrar la imagen oculta del pokemon 100', () => {
    const wraper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });
    const [img] = wraper.findAll('img');
    expect(img.exists()).toBeTruthy();
    expect(img.classes('hidden-pokemon')).toBeTruthy();
    expect(img.attributes('src')).toStrictEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
  });

  it('debe mostrar la imagen del pokemon 100', () => {
    const wraper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });
    const [img] = wraper.findAll('img');
    expect(img.exists()).toBeTruthy();
    expect(img.classes('fade-in')).toBeTruthy();
  });
});
