<template>
<div class="options-container">
  <ul>
    <li v-for="pokemon in this.pokemons"
        :key="pokemon.id"
        >
      <button @click="$emit('selectionPokemon', pokemon.id)">
        {{pokemon.name}}
      </button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'PokemonOptions',
  props: {
    pokemons: {
      type: [],
      required: true,
    },
  },
};
</script>

<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}
li button {
  width: 100%;
  background: white;
  border: 0;
  text-transform: capitalize;
  font-size: 24px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
