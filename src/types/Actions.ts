import { Pokemon } from "./Pokemon";

interface Actions {
  type: string;
  payload: Pokemon;
}

export default Actions;
