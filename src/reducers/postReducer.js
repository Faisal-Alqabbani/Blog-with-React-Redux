export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

// !bad
// return document.getElementById('root'); this is not allow in reducer
//!bad
// return axion('asdfewfsa') this is not allow in reducer

// Good yyaaay
// return state + action;

// we dont want to say like this
// state.push
// state.pop
// state[0] = 'Sam'
// state.name = sam
// state.age = 12
