//a reducer takes in 2 things:
// 1. the action
// 2. copy of current state
// 3 and returns the next state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
