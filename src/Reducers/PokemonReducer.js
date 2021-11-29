import { ActionTypes } from '../Constants/Action.type';
// import concatenateReducers from 'redux-concatenate-reducers';

const initialState = {
    pokemon: [],
};

export const ListingsReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_LISTINGS:
            return { ...state, list: payload};
        default:
            return state
    }
};