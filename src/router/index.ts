import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PokedexPage from "../views/PokedexPage.vue";
import PokemonPage from "../views/PokemonPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/pokedex-vue/",
    name: "Pokedex",
    component: PokedexPage,
  },
  {
    path: "/pokedex-vue/:pokemon",
    name: "pokemon",
    component: PokemonPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
