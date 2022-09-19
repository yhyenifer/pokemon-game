<template>
  <h1 v-if="!pokemon">Estamos cargando el pokemon....</h1>
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <pokemon-picture :pokemon-id="pokemon.id" :show-pokemon="showPokemon"></pokemon-picture>
    <pokemon-options :pokemons="pokemonArr"
                     @selection-pokemon="checkAnswer($event)"
    >
    </pokemon-options>
    <template v-if="showAnswer">
      <h2>{{message}}</h2>
      <button class="new-game" @click="newGame()">Reiniciar</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectPokemon) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectPokemon === this.pokemon.id) {
        this.message = `¡Correcto!, ${this.pokemon.name}`;
      } else {
        this.message = `¡Oops!, él es:  ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.mixPokemonArray();
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.message = '';
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
.new-game{
  font-size: 21px;
  background: steelblue;
  color: white;
  border-radius: 10px;
  border: 1px;
  box-shadow: 1px 1px 10px grey;
}
</style>
