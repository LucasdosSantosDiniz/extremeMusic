import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';


function Home() {
  return (
    <div className="#141414">
      <Menu/>

      <BannerMain
          url="https://www.youtube.com/watch?v=ff3r10rCKFs"
          videoDescription="Henrique e Juliano - LIBERDADE PROVISÓRIA - DVD Ao Vivo No Ibirapuera"
          videoTitle="AS MAIS TOCADAS NO BRASIL"
      />
    
       <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]} 
      />

      <Carousel
        category={dadosIniciais.categorias[1]} 
      />

      <Carousel
        category={dadosIniciais.categorias[2]} 
      />

      <Carousel
        category={dadosIniciais.categorias[3]} 
      />

      <Carousel
        category={dadosIniciais.categorias[4]} 
      />

      <Carousel
        category={dadosIniciais.categorias[5]} 
      />

      <Footer
          
      />
    </div>
  );
}

export default Home;

