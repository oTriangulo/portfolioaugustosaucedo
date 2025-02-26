import React, { useState } from 'react';
import './portfolio.css';
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Trabalhos</h2>

      <div className="work__filters">

      <span className="work__item" onClick={() => setItems(Menu)}>Tudo</span>
      <span className="work__item" onClick={() => filterItem("Programation")}>Programação</span>
      <span className="work__item" onClick={() => filterItem("Art")}>Arte</span>
      <span className="work__item" onClick={() => filterItem("Video")}>Vídeo</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const {link, id, image, title, autor, category} = elem;

          return (
            <a href={link} target='_blank' rel="noreferrer" >
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <p className="work__autor">{autor}</p>
            </div>
            </a>
          )
      })}
      </div>
    </section>
  )
}

export default Portfolio