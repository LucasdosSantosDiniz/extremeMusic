import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastrarVideo from './pages/cadastro/Video';
import CadastrarCategoria from './pages/cadastro/categoria';

/*function CadastrarVideo() {
    return(
      <div>
          Cadastrado com sucesso!!!
      </div>
    )
}
*/
const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
 
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>  
      <Route path="/cadastro/video" component={CadastrarVideo}/>
      <Route path="/cadastro/categoria" component={CadastrarCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


