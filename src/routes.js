import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Cadastrar from './pages/Cadastro'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/cadastro" exact component={Cadastrar} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
