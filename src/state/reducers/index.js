import { isNonEmptyString } from 'ramda-adjunct'

import { initialState, SORT_USERS, USER_REGISTERED } from '../constants'

export default function rootReducer(
  state = initialState,
  { type, payload = {} }
) {
  switch (type) {
    case USER_REGISTERED:
      return payload.user && isNonEmptyString(payload.user)
        ? {
            ...state,
            users: [...state.users, payload.user]
          }
        : state
    case SORT_USERS:
      return payload.sortUsers
        ? {
            ...state,
            sortUsers: payload.sortUsers
          }
        : state
    default:
      return state
  }
  return state
}
