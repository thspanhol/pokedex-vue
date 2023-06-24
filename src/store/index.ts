import { createStore } from "vuex";

export default createStore({
  state: {
    pokedex: {},
    pokemon: {},
  },
  getters: {},
  mutations: {
    storePokedex(state, data) {
      state.pokedex = data;
    },

    storePokemon(state, data) {
      state.pokemon = data;
    },
  },
  actions: {},
  modules: {},
});
