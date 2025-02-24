import React from 'react';
import './about.css';
import Image from "../../assets/avatar-2.png";
import AboutBox from './AboutBox';
import cv from "../../assets/cv-augusto.pdf";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">Sobre Mim</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Sou um desenvolvedor com habilidades em HTML, CSS, JavaScript, Python e React. 
              Tenho uma paixão por criar interfaces de usuário interativas e atraentes, além de
              ansiar por criar experiências digitais que deixem a marca. Seja na área de
              programação ou em qualquer outra área criativa.
              Também desenho digitalmente e produzo vídeos para o youtube.
            </p>
              <a href={cv} className="btn" download={true}>Baixe meu CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills__name">Programação</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar development">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills__name">Edição de Vídeo</h3>
                <span className="skills__number"> 80% </span>
              </div>

              <div className="skills__bar editing">
                <span className="skills__percentage editing"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills__name"> Desenho Digital </h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar drawing">
                <span className="skills__percentage drawing"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About