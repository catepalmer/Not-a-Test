import { isNonEmptyString } from 'ramda-adjunct'
import { connect } from 'react-redux'

import App from '../../components/App'
import { toggleSortUsers, userRegistered } from '../../state/actions'
import { getUsers, getLatestUser, getSorted } from '../../state/selectors'

// Added sortUsers key in the state that will be mapped to props - the value
// of sortUsers will be a boolean returned by the getSorted function imported
// from the selectors file. At this stage I only had time to write the actions,
// reducers, selectors, and set initial state to include the sortUsers key -
// I haven't actually written a function yet to sort the users alphabetically
// as I got a bit caught up in trying to figure out how to use Ramda's sort function
// with its map function.

// If I had more time I would next move on to writing a conditional inside the
// App component that returned a list of users sorted alphabetically rather than
// an unsorted list of users if the sortUsers key in state was set to true.
// Then I would move on to making the 'Sort list alphabetically' button one that toggled
// between sorting and unsorting the list (and would update the handleSortUsers function
// accordingly to toggle sortBool between true and false). Then I would move onto the
// user stories I didn't get to - writing unit tests, adding styled-components, and adding
// the ability to delete names.

// The resources I mainly used were the Ramda documentation, Google, a bit of Stack Overflow,
// and MDN WebDocs + W3Schools. I'm still very new to using Ramda so I often try to write a
// vanilla JS version of a function first, before trying to translate it into a Ramda
// function (which was what I did with the Ramda functions I used).

function mapStateToProps(state, props) {
  return {
    sortUsers: getSorted(state),
    users: getUsers(state),
    latestUser: getLatestUser(state)
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    handleOnSubmit: e => {
      e.preventDefault()
      const userInput = e.target.elements['user']
      if (isNonEmptyString(userInput.value)) {
        dispatch(userRegistered(userInput.value))
        userInput.value = ''
      }
    },
    // The handleSortUsers function is passed to the button that the user can
    // click to sort the list of users displayed alphabetically. At the moment
    // all it does is dispatch an action that sets the value of sortUsers in state
    // to true (in initialState it's set to false). I haven't written the function
    // to sort the users alphabetically yet so nothing actually happens when the
    // value of sortUsers in state changes; first I'll write the function to sort the
    // users alphabetically when sortUsers === true, then I'll turn the button into
    // one that can toggle sortUsers between true and false and update the display
    // of the list of users accordingly.
    handleSortUsers: e => {
      e.preventDefault()
      const sortBool = true
      dispatch(toggleSortUsers(sortBool))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
