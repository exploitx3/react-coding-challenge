import { UPDATE_ENTRIES } from '../constants/actionTypes'
import initialState from './initialState'

export default function entriesReducer(state = initialState.entries, action) {

  switch (action.type) {
    case UPDATE_ENTRIES:

      return [...action.entries]


    default:
      return state
  }
}
