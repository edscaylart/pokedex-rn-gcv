"use strict";

const Pokedex = require("pokedex-promise-v2");

class PokemonController {
  async show({ params }) {
    const P = new Pokedex();

    const res = await P.getPokemonByName(params.name);

    return res;
  }
}

module.exports = PokemonController;
