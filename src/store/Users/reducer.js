import { ADD_USER, REMOVE_USER } from '../actionTypes';

const initialState = { 
    users: []
  };

const addUser = (state, payload) => {
    const { name } = payload;

    return {
      ...state,
      users:[...state.users, name]
    };
}

const removeUser = (state, payload) => {
    const { name } = payload;
    const newUsers = state.users.filter((user) => user !== name);

    return {
      ...state,
      users:newUsers
    }
}

export const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case ADD_USER: return addUser(state, payload);
    case REMOVE_USER: return removeUser(state, payload);
    default: return state;
  }
};