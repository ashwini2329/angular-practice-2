import { createReducer, on } from "@ngrx/store";
import { removeVowels, addSubstring } from "./string.actions";

const initialState = '';
const initialString = 'Angular';

export const stringReducer = createReducer(
  initialState,
  on(removeVowels, (state, action) => {
    const newState = (state + action.value).replace(/[aeiouAEIOU]/g, '');
    console.log(`Updated state: ${newState}`); // Check if this logs correctly
    return newState;
  }),
);

export const addSubstringValue = createReducer(
  initialString,
  on(addSubstring, (state, action) => {
    return state + action.value;
  })
)
