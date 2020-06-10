import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Subpage from './Subpage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/subpage">
            <Subpage></Subpage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;