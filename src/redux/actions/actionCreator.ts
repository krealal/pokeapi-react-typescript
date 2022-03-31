import Actions from "../../types/Actions";
import { Pokemon } from "../../types/Pokemon";
import actionTypes from "./actionTypes";

export const getPokemonAction = (pokemon: Pokemon): Actions => ({
  type: actionTypes.getPokemons,
  payload: pokemon,
});
