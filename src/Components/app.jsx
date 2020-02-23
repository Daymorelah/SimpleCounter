import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
