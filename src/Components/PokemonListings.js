import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setListings } from '../Actions/FetchActions';


const PokemonListings = () => {
  const PokemonListings = useSelector((state) => state.PokemonListings);
  const dispatch = useDispatch();
  // var abilities ="";
  // var formsName= "";
  // var height=  "";
  // var held_items = "";

  const fetchPokemon = async () => {

    const APIresponse = await axios.get(` https://pokeapi.co/api/v2/pokemon/`)
    .then(response => {dispatch(setListings(response))})
    .then(console.log("Pokemon: " + PokemonListings.list.data.results[1].name))
    // .then(console.log("Picture URL: " + PokemonListings.list.data.results[1].url))
    .catch((error) => {
      console.log("Error:", error);
    });
   
  };

  useEffect(() => {
    fetchPokemon();
  }, [])


  if (Object.keys(PokemonListings).length > 0) {
    var RenderPokemon = PokemonListings.list.data.results.map(pokemon => {
      const { name } = pokemon;
      return (
        <>
        <div class="pokemonBorder">
        <span>{name}</span><br/>
        </div>
      </>
        )
    })
  }
  
  return (
    <>
    <div>
      <p>Just testing the waters...</p>
    </div>
      <div>
        {RenderPokemon}
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
       return{
         PokemonListings: (list) => { dispatch({type: 'SET_LISTINGS', list})}
       }
     }



  export default connect(mapStateToProps, mapDispatchToProps)(PokemonListings); 