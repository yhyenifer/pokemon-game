import { shallowMount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage.vue';
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });
  it('debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('debe de llamar mixPokemonArray al montar', () => {
    const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');
    shallowMount(PokemonPage);
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  it('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
    const wrapperNew = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    expect(wrapperNew.html()).toMatchSnapshot();
  });

  it('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
    const wrapperNew = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    const picture = wrapperNew.find('pokemon-picture-stub');
    const options = wrapperNew.find('pokemon-options-stub');

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();

    expect(picture.attributes('pokemonid')).toBe('1');
    expect(options.attributes('pokemons')).toBeTruthy();
  });

  it('pruebas con checkAnswer', async () => {
    const wrapperNew = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    await wrapperNew.vm.checkAnswer(1);

    expect(wrapperNew.find('h2').exists()).toBeTruthy();
    expect(wrapperNew.vm.showPokemon).toBe(true);
    expect(wrapperNew.find('h2').text()).toBe(`¡Correcto!, ${pokemons[0].name}`);

    await wrapperNew.vm.checkAnswer(10);

    expect(wrapperNew.vm.message).toBe(`¡Oops!, él es:  ${pokemons[0].name}`);
  });
});
