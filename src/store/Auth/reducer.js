import { TOGGLE_AUTH } from '../actionTypes';

const initialState = {
    auth: false,
 };

const toggleAuth = (state, payload) => {
  const { isAuth } = payload;
    
  return {
    ...state,
    auth:isAuth
  }
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case TOGGLE_AUTH: return toggleAuth(state, payload);
    default: return state;
  }
};