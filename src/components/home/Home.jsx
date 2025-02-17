import React, { useState } from 'react';
import './home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
    
  return (
    <section className="home container" id="home">
      <div className="toggleMenu" onClick={() => setShowMenu(!showMenu)}>
        <i class="fa-solid fa-bars"></i>
      </div>

      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Augusto Saucedo</h1>
        <span className="home__education">Programador, Artista e Videomaker</span>
      
        <HeaderSocials />

        <a href="#contact" className="btn">Me Contrate</a>

      <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home