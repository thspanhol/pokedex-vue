<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "App",
  created() {
    this.getPokemons();
  },
  methods: {
    async getPokemons(): Promise<void> {
      let results: any[] = [];
      await axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((res) => (results = res.data.results || res.data.pokemon))
        .catch((err) => console.log(err));
      let endPoints = results.map((e) => e.url || e.pokemon.url);
      await axios
        .all(endPoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => (results = res));
      this.$store.commit("storePokedex", results);
    },
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#app {
  display: flex;
  justify-content: center;
}
</style>
