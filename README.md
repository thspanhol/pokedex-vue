# ⚜️ Projeto PokeVue ⚜️

O objetivo deste projeto é criar uma nova versão da [Pokedex](https://github.com/thspanhol/pokedex) utilizando Vue.js e TypeScript em vez de React, com o propósito de expandir minhas habilidades de desenvolvimento e diversificar as ferramentas que utilizo. O projeto também utiliza a API do [Pokéapi](pokeapi.co) para desenvolver uma pokedex com um buscador de pokemons que podem ser filtrados por tipo e/ou nome, além de conter as estatísticas individuais em uma segunda página!

### ⚜️ Instalação

Clone o repositório com o comando:
```
git clone https://github.com/thspanhol/pokevue.git
```

Depois entre na pasta do projeto e instale as dependências com o comando:
```
npm install
```

Após isso, para abrir a aplicação basta usar o comando:
```
npm run serve
```
### ⚜️ Como Utilizar

Ao abrir a aplicação será renderizada uma tela com todos os pokémons da primeira geração. A tela também conta com um input para pesquisa por nome e botões para filtro por tipo, além disso, clicando em cima do pokémon escolhido será aberta outra página contendo as estatísticas do mesmo.

## ⚜️ Possíveis alterações

* Alterando o número atribuído ao final do link contido na linha 17 do arquivo src\App.vue, é possível aumentar ou diminuir o número de pokémons elencados na aplicação.

## ⚜️ Construído com

* Vue - O framework usado para desenvolver os componentes vue.
* CSS - Para estilização da página.
* Pokéapi - Usada para buscar as informações dos pokémons.
* Axios - Usado para buscar os dados fornecidos pela API.
* Vue Router - Para determinar as rotas da aplicação.
* Vuex - Para gerenciar o estado da aplicação.

## ⚜️ Autor

* **Thales Spanhol** - [Perfil no GitHub](https://github.com/thspanhol)

---