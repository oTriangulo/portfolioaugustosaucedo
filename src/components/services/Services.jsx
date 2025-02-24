import React from 'react';
import './services.css';
import Image1 from '../../assets/programming.png';
import Image2 from '../../assets/digital-art.png';
import Image3 from '../../assets/montage.png';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Programação',
    description: 'Experiência em desenvolvimento web com HTML, CSS, JavaScript, React e Python, focado em códigos limpos e eficientes.',
  },
  {
    id: 2,
    image: Image2,
    title: 'Arte Digital',
    description: 'Experiência em arte digital, com foco em design de personagens, cenários e outros elementos visuais.',
  },
  {
    id: 3,
    image: Image3,
    title: 'Edição de vídeo',
    description: 'Experiência em edição de vídeo com Sony Vegas e Premiere, incluindo cortes, transições e efeitos visuais.',
  },
];

const Services = () => {
  return <section className="services container section" id='services'>
    <h2 className="section__title">Serviços</h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return (
        <div className="services__card" key={id}>
          <img src={image} alt="" className='services__img' />

          <h3 className="services__title">{title}</h3>
          <p className="services__description">{description}</p>
        </div>
      )
      })}
    </div>
  </section>
};

export default Services