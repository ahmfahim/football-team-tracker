import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import LeaguesDetails from './components/LeaguesDetails/LeaguesDetails';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/leaguesDetails/:idTeam">
            <LeaguesDetails />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
