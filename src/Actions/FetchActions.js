import { ActionTypes } from '../Constants/Action.type';
export const setListings = (pokemon) => {
    return {
        type: ActionTypes.SET_LISTINGS,
        payload: pokemon,
    }
}