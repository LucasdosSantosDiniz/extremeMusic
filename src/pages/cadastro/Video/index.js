import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastrarVideo() {
    return(
      <PageDefault>
          <h1> Cadastro de Vídeos</h1>

      <Link to="/cadastro/categoria">
          <h2> Cadastrar Categoria</h2>
      </Link>
      </PageDefault>
    )
}

export default CadastrarVideo;