import { createReducer, on } from "@ngrx/store";
import { removeVowels } from "./string.actions";

const initialState = '';

export const stringReducer = createReducer(
  initialState,
  on(removeVowels, (state, action) => {
    const newState = (state + action.value).replace(/[aeiouAEIOU]/g, '');
    console.log(`Updated state: ${newState}`); // Check if this logs correctly
    return newState;
  })
);
