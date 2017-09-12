//a reducer takes in 2 things:
// 1. the action
// 2. copy of current state
// 3 and returns the next state

function posts(state = [], action) {
  const i = action.index;
  switch(action.type){
    case 'INCREMENT_LIKES':
      //return the updated state
      return [
        ...state.slice(0, i), //before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)//after the one we are updating
      ]
    default:
      return state;
  }
  return state;
}

export default posts;
