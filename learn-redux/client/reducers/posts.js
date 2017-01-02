// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. a copy of the current state

// every reducer will run every time there is an action dispatched. whether you update the state after an action is up to you.

function posts(state = [], action) {
  console.log('The post will change')
  console.log(state, action)
  return state
}

export default posts
