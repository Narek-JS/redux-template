import { ADD_USER, REMOVE_USER } from '../actionTypes';

export const addUser = (name) => {
    return {
        type: ADD_USER,
        payload: {name}
    }
}

export const deleteUser = (name) => {
    return {
        type: REMOVE_USER,
        payload: {name}
    }
}