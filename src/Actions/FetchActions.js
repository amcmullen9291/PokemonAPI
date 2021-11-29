import { ActionTypes } from '../Constants/Action.type';
export const setListings = (pokemon) => {
    return {
        type: ActionTypes.SET_LISTINGS,
        payload: pokemon,
    }
}

export const PokemonReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_POKEMON:
            return { ...state, ...payload};
        default:
            return state;
    }
}