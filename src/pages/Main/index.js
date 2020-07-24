import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Main() {
  return (
    <div className="container">
      <h1>Seja bem vindo!</h1>
      <p>Clique no botão para fazer o Login</p>
      <Link to='/login' className="link-back link-back--hover"><button>Login</button></Link>
    </div>
  );
}

export default Main;
