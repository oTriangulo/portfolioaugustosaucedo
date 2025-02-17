import React, { useState } from 'react';
import './portfolio.css';
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Trabalhos</h2>

      <div className="work__filters">

      <span className="work__item">Tudo</span>
      <span className="work__item">Criativo</span>
      <span className="work__item">Programação</span>
      <span className="work__item">Arte</span>
      <span className="work__item">Vídeo</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const {id, image, title, category} = elem;

          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
      })}
      </div>
    </section>
  )
}

export default Portfolio