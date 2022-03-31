import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";

const rootReducer = combineReducers({
  pokemonList: pokemonReducer,
});

export default rootReducer;
