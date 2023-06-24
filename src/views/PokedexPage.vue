<template>
  <div className="screen">
    <div className="nav">
      <img
        alt="Fidelidex.me"
        src="https://raw.githubusercontent.com/thspanhol/pokevue/main/public/fidelidex.png"
      />
      <input
        type="text"
        v-model="input_name"
        placeholder="Search Pokemon for Name"
      />
      <div className="btns">
        <button
          v-for="types in Object.keys(this.colours)"
          :key="types"
          @click="selectType(types)"
          :style="{
            background:
              this.selectedType === types ? this.colours[types] : '#0C7155',
          }"
        >
          {{ types[0].toUpperCase() + types.substring(1) }}
        </button>
      </div>
    </div>
    <img
      v-if="$store.state.pokedex.length !== 151"
      alt="loading"
      src="https://raw.githubusercontent.com/thspanhol/pokedex/main/public/poke-loading.gif"
      className="loading"
    />
    <div v-else className="list">
      <div className="card">
        <router-link
          v-for="pokemons in $store.state.pokedex

            .filter((e) =>
              e.data.name.startsWith(this.input_name.toLowerCase())
            )

            .filter((e) => {
              const crossTypes =
                e.data.types.length === 1
                  ? e.data.types[0].type.name
                  : e.data.types[0].type.name + e.data.types[1].type.name;
              return crossTypes.includes(selectedType);
            })"
          :key="pokemons.data.id"
          @click="selectPokemon(pokemons.data)"
          :to="pokemons.data.name"
        >
          <img
            :alt="pokemons.data.name"
            :src="Object.values(pokemons.data.sprites.other)[2].front_default"
          />
          <div className="name">
            <h2>
              {{
                pokemons.data.name[0].toUpperCase() +
                pokemons.data.name.substring(1)
              }}
            </h2>
            <h2>{{ "#" + `00${pokemons.data.id}`.slice(-3) }}</h2>
          </div>
          <div className="types">
            <h3
              v-for="types in pokemons.data.types"
              :key="types.type.name"
              :style="{
                background: this.colours[types.type.name],

                textDecoration: 'underline' + this.colours[types.type.name],
              }"
            >
              {{
                types.type.name[0].toUpperCase() + types.type.name.substring(1)
              }}
            </h3>
          </div>
        </router-link>
        <h2
          v-show="
            $store.state.pokedex

              .filter((e) =>
                e.data.name.startsWith(this.input_name.toLowerCase())
              )

              .filter((e) => {
                const crossTypes =
                  e.data.types.length === 1
                    ? e.data.types[0].type.name
                    : e.data.types[0].type.name + e.data.types[1].type.name;
                return crossTypes.includes(selectedType);
              }).length === 0
          "
        >
          Nenhum Pokémon Encontrado.
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PokedexPage",
  data() {
    return {
      colours: {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        /* dark: "#705746", */
        steel: "#B7B7CE",
        fairy: "#D685AD",
      },
      input_name: "",
      selectedType: "",
    };
  },
  methods: {
    selectPokemon(pokeData: Array<object>) {
      this.$store.commit("storePokemon", pokeData);
    },
    selectType(type: string) {
      this.selectedType === type
        ? (this.selectedType = "")
        : (this.selectedType = type);
    },
  },
});
</script>

<style>
.loading {
  margin: 10% 40% 0 40%;
  width: 50%;
  max-width: 300px;
}
.screen {
  max-width: 1600px;
  align-items: center;
  justify-content: center;
}
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #1ea57b;
  margin-bottom: 10px;
  border-radius: 0 0 45px 45px;
}
.nav img {
  width: 300px;
  border-radius: 200px;
  margin: 15px 0;
}
.nav input {
  height: 40px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  border-radius: 30px;
  width: 15%;
  min-width: 220px;
  padding: 0 0 0 8px;
  font-weight: bold;
  font-size: 15px;
}
.btns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 40%;
}
.btns button {
  width: 70px;
  height: 35px;
  margin: 5px;
  border-radius: 15px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  cursor: pointer;
  font-weight: bold;
}
.btns button:hover {
  color: #fff;
}
.list {
  display: flex;
  flex-wrap: wrap;
  cursor: default;
  justify-content: center;
  background: #fff;
}
.card {
  display: flex;
  flex-wrap: wrap;
  cursor: default;
  justify-content: center;
  background: #fff;
}
.card a {
  margin: 5px;
}
.card a img {
  background: lightgray;
  border-radius: 15px;
  width: 250px;
}
.name {
  display: flex;
  cursor: default;
}
.name h2 {
  margin: 5px 2.5px;
  text-decoration-line: none;
  text-decoration: underline white;
  color: black;
}
.name h2:nth-child(2) {
  color: gray;
}
.types {
  display: flex;
  cursor: default;
}
.types h3 {
  width: 30%;
  text-align: center;
  padding: 3px 2px 3px 2px;
  margin-right: 10px;
  border-radius: 15px;
  color: black;
  font-size: 15px;
  font-weight: bold;
}
@media screen and (max-width: 760px) {
  .loading {
    margin: 10% 25% 0 25%;
  }
  .nav {
    flex-direction: column;
  }
  .btns {
    width: 90%;
    margin: 5px 0;
  }
  .list {
    justify-content: center;
  }
  .card {
    width: 40%;
  }
  .card img {
    width: 100%;
  }
  .name h2 {
    margin: 1px 0.5px;
    font-size: 90%;
  }
  .types h3 {
    width: 37.5%;
    font-size: 80%;
  }
}
</style>
