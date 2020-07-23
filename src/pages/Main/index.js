import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Main() {
  return (
    <div className="container">
      <h1>Bem vindo a página de Cadastro de Clientes</h1>
      <p>Se ainda não possui cadastro clique no botão abaixo</p>
      <Link to='/cadastro' className="link-back link-back--hover"><button>Cadastrar</button></Link>
    </div>
  );
}

export default Main;
