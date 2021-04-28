import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './containers/Home';
import Login from './containers/Login';
import NewNote from './containers/NewNote';
import Notes from './containers/Notes';
import NotFound from './containers/NotFound';
import Settings from './containers/Settings';
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
    <Route exact path="/settings">
      <Settings />
    </Route>
    <Route exact path="/notes/new">
      <NewNote />
    </Route>
    <Route exact path="/notes/:id">
      <Notes />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
