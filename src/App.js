import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => {
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

const NotFound = () => {
  return(
    <div>
      <h1>404 not found</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop/hats' component={HatsPage}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
