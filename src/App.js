import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import react from 'react'
import Player from './component/Player';
import ViewPlayers from './component/View';

function App() {

  return (
    
      <Router>
        <div className='App'>
        <Switch>
          <Route exact path='/' component={Player} />
          <Route exact path='/View' component={ViewPlayers} />
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
