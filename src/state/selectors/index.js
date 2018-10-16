import { head, pipe, reverse } from 'ramda'

export function getUsers({ users }) {
  return users
}

export const getLatestUser = pipe(
  getUsers,
  reverse,
  head
)

export function getSorted({ sortUsers }) {
  return sortUsers
}
