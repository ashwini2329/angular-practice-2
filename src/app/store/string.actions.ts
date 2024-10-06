import { createAction, props } from "@ngrx/store"


export const removeVowels = createAction(
  'removeVowels',
  props<{value: string}>()
)

export const addSubstring = createAction(
  'AddSubstring',
  props<{value: string}>()
)
