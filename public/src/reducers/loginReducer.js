const defaultAuthState = {
  isLoggedIn: false,
  user: null
};

const auth = (state = defaultAuthState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      console.log('Case: USER_LOGIN, Payload: ', action.payload);
      return Object.assign({}, state, {
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user
      });
    case 'USER_LOGOUT':
      console.log('Case: USER_LOGOUT, Payload: ', action.payload);
      return Object.assign({}, state, {
        isLoggedIn: action.payload.isLoggedIn,
        user: null
      });
    default:
      console.log('Returning default state: ', state);
      return state;
  }
};

export default auth;
