import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PokemonListings from './Components/PokemonListings';
// import SelectedPokemon from './Components/SelectedPokemon';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={PokemonListings}/>
          {/* <Route path={"/Pokemon/:name"} exact component={SelectedPokemon}/> */}
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;