import { USER_REGISTERED, SORT_USERS } from '../constants'

export function userRegistered(user) {
  return {
    type: USER_REGISTERED,
    payload: {
      user
    }
  }
}

// The toggleSortUsers action creator takes a boolean as an argument and
// returns an action object with the payload.sortUsers key set to this
// boolean value.
export function toggleSortUsers(sortBool) {
  return {
    type: SORT_USERS,
    payload: {
      sortUsers: sortBool
    }
  }
}
