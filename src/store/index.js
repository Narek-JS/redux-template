import { createStore, combineReducers } from "redux";

// reducers
import { authReducer } from './Auth/reducer';
import { usersReducer } from './Users/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer
});

export const store = createStore(rootReducer);