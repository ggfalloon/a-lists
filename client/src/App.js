import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Netflix from './pages/Netflix';
import Hulu from './pages/Hulu';
import DisneyPlus from './pages/DisneyPlus';
import HBOMax from './pages/HBOMax';
import PrimeVideo from './pages/PrimeVideo';
import AppleTvPlus from './pages/AppleTvPlus';
import history from "./utils/history";


function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/netflix' component={Netflix} />
          <Route exact path='/hulu' component={Hulu} />
          <Route exact path='/disneyplus' component={DisneyPlus} />
          <Route exact path='/hbomax' component={HBOMax} />
          <Route exact path='/primevideo' component={PrimeVideo} />
          <Route exact path='/appletvplus' component={AppleTvPlus} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
