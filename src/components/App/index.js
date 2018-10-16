import { mapIndexed } from 'ramda-adjunct'
import { is, length } from 'ramda'
import React from 'react'

export default function App({
  handleOnSubmit,
  handleSortUsers,
  latestUser,
  sortedUsers,
  users
}) {
  const tempUsers = ['Cate Palmer', 'Ken McKen', 'Jen McKen']
  return (
    <div className="App">
      {/* Added a welcome message that checks the latestUser value to see
      if it's a string, and returns a message that welcomes that user by name
      if it is (but otherwise just returns a generic welcome message). */}
      Welcome{is(String, latestUser) ? `, ${latestUser}!` : `!`}
      <p>Add your name below to register!</p>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user" />
        <input type="submit" value="Register user" />
      </form>
      {/* Added a conditional to check for whether there are any users in the
      users array (i.e. length > 0), so that the message telling the user
      to see the list below for everyone else who has registered is only visible
      if there are actually names to be displayed. Also included when the length
      of the users arrau is > 0 is a function that maps over the users array, 
      rendering an <li> component displaying each user's name. */}
      {length(tempUsers) > 0 ? (
        <div>
          <p>See the list below for everyone else who has registered.</p>
          <ul>{mapIndexed(user => <li>{user}</li>, tempUsers)}</ul>
          <form onSubmit={handleSortUsers}>
            <input type="submit" value="Sort list alphabetically" />
          </form>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
