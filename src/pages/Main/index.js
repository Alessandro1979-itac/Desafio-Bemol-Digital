import React from 'react';
import './index.css';

function Main() {
  return (
    <div className="container">
      <h1>Bem vindo a página de Cadastro de Clientes</h1>
      <p>Se ainda não possui cadastro clique no botão abaixo</p>
      <button>
        <a href="../Cadastro">Cadastrar</a>
      </button>
    </div>
  );
}

export default Main;