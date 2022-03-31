import { getPokemonAction } from "./actionCreator";

describe("given a getPokemonAction", () => {
  describe("when it receives an object pokemon", () => {
    test("then it should call getPokemonAction and compare it with expected action", () => {
      const pokemon = {
        name: "lugia",
        number: 4,
        hp: 123,
        attackNumber: 545,
        specialAttackNumber: 76,
        defenseNumber: 774,
        image: "src/lugia.png",
      };

      const expectedAction = {
        type: "get-pokemons",
        payload: pokemon,
      };

      const action = getPokemonAction(pokemon);

      expect(action).toEqual(expectedAction);
    });
  });
});
