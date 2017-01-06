// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. a copy of the current state

// every reducer will run every time there is an action dispatched. whether you update the state after an action is up to you.

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('Incrementing likes!')
      const i = action.index
      return [
        ...state.slice(0, i), // before one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) // after the one we are updating
      ]

    default:
      return state
  }
}

export default posts
