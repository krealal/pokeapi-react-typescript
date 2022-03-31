import { Pokemon } from "./Pokemon";

interface Actions {
  type: string;
  payload: Pokemon | Pokemon[];
}

export default Actions;
