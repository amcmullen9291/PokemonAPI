import { combineReducers } from 'redux';
import { ListingsReducer } from './PokemonReducer';

const RootReducer = combineReducers({
    PokemonListings: ListingsReducer
});

export default RootReducer;