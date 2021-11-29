import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setListings } from '../Actions/FetchActions';
import { Link } from 'react-router-dom';

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
    .then(console.log("Pokemon: " + PokemonListings.list.data.results[0].name))
    // .then(console.log("Picture URL: " + PokemonListings.list.data.results[1].url))
    .catch((error) => {
      console.log("Error:", error);
    });
   
  };

  useEffect(() => {
    fetchPokemon();
  }, [])


  if (Object.keys(PokemonListings).length >= 1) {
    var RenderPokemon = PokemonListings.list.data.results.map(pokemon => {
      const { name, url } = pokemon;
      return (
        <>
        <center>
        <div class="pokemonBorder">
        <h1><Link to={`/Pokemon/${name}`}>{name}</Link></h1><br/>
        <h2>{url}</h2>
        </div>
        </center>
      </>
        )
    })
  }
  
  return (
    <>
    <div id="mainBackground"> 
    <div>
      <h1 id="title"><center>Pokemon List:</center></h1>
    </div>
    <br/>
      <div>
        {RenderPokemon}
      </div>
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