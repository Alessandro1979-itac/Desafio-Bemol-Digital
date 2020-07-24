import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import { Link } from 'react-router-dom';
import './Home.css';

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pages-home">
      Parabéns, você conseguiu clique no botão para concluir seu cadastro
      <br />

      <Link to='/cadastro' className="link-back link-back--hover">
        <button type="button" onClick={() => setToken(null)}>Avançar</button>
      </Link>
      
    </div>
  );
};

export default PagesHome;