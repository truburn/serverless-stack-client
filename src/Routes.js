import React from 'react';
import { Route, Switch } from 'react-router';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

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
    <UnauthenticatedRoute exact path="/login">
      <Login />
    </UnauthenticatedRoute>
    <UnauthenticatedRoute exact path="/signup">
      <Signup />
    </UnauthenticatedRoute>
    <AuthenticatedRoute exact path="/settings">
      <Settings />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/notes/new">
      <NewNote />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/notes/:id">
      <Notes />
    </AuthenticatedRoute>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
