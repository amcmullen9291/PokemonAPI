import { combineReducers } from 'redux';
import { ListingsReducer, SelectedPokemonReducer } from './PokemonReducer';

const RootReducer = combineReducers({
    PokemonListings: ListingsReducer,
    Pokemon: SelectedPokemonReducer
});

export default RootReducer;