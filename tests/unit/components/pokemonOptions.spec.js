import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions.vue';
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonOptions Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  it('debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('debe mostrar 4 opciones correctamente', () => {
    const liTags = wrapper.findAll('li');
    expect(liTags.length).toBe(4);
    expect(liTags[0].text()).toBe('bulbasaur');
    expect(liTags[1].text()).toBe('ivysaur');
    expect(liTags[2].text()).toBe('venusaur');
    expect(liTags[3].text()).toBe('charmander');
  });

  it('debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {
    const [b1, b2, b3, b4] = wrapper.findAll('button');

    b1.trigger('click');
    b2.trigger('click');
    b3.trigger('click');
    b4.trigger('click');
    // console.log(wrapper.emitted('selectionPokemon'))
    expect(wrapper.emitted('selectionPokemon').length).toBe(4);
    expect(wrapper.emitted('selectionPokemon')[0]).toEqual([1]);
    expect(wrapper.emitted('selectionPokemon')[1]).toEqual([2]);
    expect(wrapper.emitted('selectionPokemon')[2]).toEqual([3]);
    expect(wrapper.emitted('selectionPokemon')[3]).toEqual([4]);
  });
});
