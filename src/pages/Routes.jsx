import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProvider  from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';
import Cadastrar from './Cadastro/index';
import Main from './Main/index';
import Home from './Home/Home';
import Login from './Login/Login';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/cadastro" exact component={Cadastrar} />
        <RoutesPrivate path="/home" exact component={Home} />
        <Route />
      </Switch>
    </StoreProvider>
  </Router>
);

export default PagesRoot;
