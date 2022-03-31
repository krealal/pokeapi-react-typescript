import { getPokemonAction } from "../actions/actionCreator";
import pokemonReducer from "./pokemonReducer";

describe("given a pokemonReducer", () => {
  describe("when it gets a current pokemon", () => {
    test("then it should return a new pokemon", () => {
      const currentPokemon = [
        {
          name: "lugia",
          number: 4,
          hp: 123,
          attackNumber: 545,
          specialAttackNumber: 76,
          defenseNumber: 774,
          image: "src/lugia.png",
        },
      ];

      const newPokemon = [
        {
          name: "hoho",
          number: 1,
          hp: 163,
          attackNumber: 595,
          specialAttackNumber: 16,
          defenseNumber: 274,
          image: "src/hoho.png",
        },
      ];
      const action = getPokemonAction(newPokemon);
      const recievedList = pokemonReducer(currentPokemon, action);

      expect(recievedList).toEqual(newPokemon);
    });
  });
});
