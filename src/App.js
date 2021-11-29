import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PokemonListings from './Components/PokemonListings';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={PokemonListings}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;