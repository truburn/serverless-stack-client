import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import NotFound from './containers/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;