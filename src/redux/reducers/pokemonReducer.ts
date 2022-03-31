import Actions from "../../types/Actions";
import { AnyAction } from "redux";
import { Pokemon } from "../../types/Pokemon";
import actionTypes from "../actions/actionTypes";

const pokemonReducer = (pokemon: Pokemon[] | [], action: Actions | {}) => {
  let newPokemon;

  switch ((action as AnyAction).type) {
    case actionTypes.getPokemons:
      newPokemon = [...(action as AnyAction).payload];
      break;

    default:
      newPokemon = [...pokemon];
      break;
  }
  return newPokemon;
};

export default pokemonReducer;
