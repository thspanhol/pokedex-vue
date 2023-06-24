<template>
  <div className="page">
    <div className="info">
      <div className="image">
        <h1>
          {{
            $store.state.pokemon.name[0].toUpperCase() +
            $store.state.pokemon.name.substring(1)
          }}
        </h1>
        <h2>{{ "#" + `00${$store.state.pokemon.id}`.slice(-3) }}</h2>
        <div>
          <h3
            v-for="tipos in $store.state.pokemon.types"
            :key="tipos.type.name"
            :style="{ background: this.colours[tipos.type.name] }"
          >
            {{ tipos.type.name }}
          </h3>
        </div>
        <img
          :alt="$store.state.pokemon.name"
          :src="
            Object.values($store.state.pokemon.sprites.other)[2].front_default
          "
        />
      </div>
      <div className="stats">
        <div className="gameStatus">
          <img
            className="firstchibi"
            :alt="$store.state.pokemon.name + '-game_sprite'"
            :src="$store.state.pokemon.sprites.back_default"
          />
          <h2>Game Status</h2>
          <img
            className="secoundchibi"
            :alt="$store.state.pokemon.name + '-game_sprite'"
            :src="$store.state.pokemon.sprites.front_default"
          />
        </div>
        <div className="numbers">
          <div
            v-for="pokemon in $store.state.pokemon.stats"
            :key="pokemon.stat.name"
          >
            <h3>
              {{
                pokemon.stat.name[0].toUpperCase() +
                pokemon.stat.name.substring(1)
              }}
            </h3>
            <div
              className="skill"
              :style="{
                border:
                  '1px solid' +
                  this.colours[$store.state.pokemon.types[0].type.name],
              }"
            >
              <div
                className="skill_level"
                :style="{
                  width: pokemon.base_stat / 1.6 + '%',
                  background:
                    this.colours[$store.state.pokemon.types[0].type.name],
                }"
              ></div>
            </div>
          </div>
        </div>
        <router-link to="/pokedex-vue/" className="link">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PokemonPage",
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
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
      },
    };
  },
});
</script>

<style>
.page {
  background: #252525;
  display: flex;
  min-height: 100vh;
  min-width: 1000px;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.info {
  display: flex;
  background: whitesmoke;
  width: 1000px;
  min-width: 1000px;
  height: 650px;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
}
.image {
  width: 47.5%;
}
.image h2 {
  color: gray;
}
.image img {
  background: lightgray;
  border-radius: 15px;
}
.image div {
  display: flex;
}
.image div h3 {
  width: 100px;
  text-align: center;
  padding: 1px 0;
  border-radius: 15px;
  margin-right: 10px;
  margin-bottom: 5px;
}
.stats {
  width: 40%;
  background: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 0 0 10px 0;
}
.gameStatus {
  display: flex;
  align-items: center;
}
.numbers {
  flex-direction: column;
  align-items: center;
  width: 65%;
}
.numbers div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.skill {
  background: #252525;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 2px;
  width: 100px;
  border-radius: 15px;
  padding: 2px;
}
@keyframes status {
  0% {
    width: 0%;
  }
}
.skill_level {
  height: 10px;
  border-radius: 15px;
  animation: status 0.7s linear;
}
.firstchibi {
  margin-right: -7.5px;
}
.secoundchibi {
  margin-left: -7.5px;
}
.link {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  text-decoration: none;
  position: absolute;
  margin-top: 300px;
  background: #252525;
  color: whitesmoke;
  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  transition: 0.2s;
}
.link:hover {
  width: 80px;
  transition: 0.2s;
}
@media screen and (max-width: 760px) {
  .page {
    min-height: none;
    width: 100%;
    min-width: 100vw;
  }
  .info {
    width: 350px;
    min-width: 350px;
    height: 630px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .image {
    width: 90%;
    margin-top: -70px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .image img {
    width: 200px;
  }
  .image div {
    width: auto;
  }
  .image div h3 {
    font-size: 95%;
    min-width: 80px;
    margin: 5px 5px;
  }
  .stats {
    width: 300px;
    margin-top: 10px;
    max-width: 250px;
  }
  .firstchibi {
    margin-right: -5px;
    width: 50px;
  }
  .secoundchibi {
    margin-left: -5px;
    width: 50px;
  }
  .numbers {
    width: 95%;
    font-size: 80%;
  }
  .link {
    margin-top: 210px;
  }
}
</style>
