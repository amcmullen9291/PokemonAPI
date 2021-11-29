import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setListings } from '../Actions/FetchActions';


const PokemonListings = () => {
  const PokemonListings = useSelector((state) => state.PokemonListings);
  const dispatch = useDispatch();

  const fetchPokemon = async () => {

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then(response => {dispatch(setListings(response))})
    .then(console.log(PokemonListings.list))
    .catch((error) => {
      console.log("Error:", error);
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, [])



  return (
    <>
    <div>
      <p>Just testing the waters...</p>
    </div>
      </>

    )
}
const mapStateToProps = (state) => {
  return {
    PokemonListings: state.PokemonListings
  }

}

     const mapDispatchToProps = (dispatch) => {
       console.log("function is being called")
       return{
         PokemonListings: (list) => { dispatch({type: 'SET_LISTINGS', list})}
       }
     }



  export default connect(mapStateToProps, mapDispatchToProps)(PokemonListings); 