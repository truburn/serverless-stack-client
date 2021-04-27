import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './containers/Home';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import Signup from './containers/Signup';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/signup">
      <Signup />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
