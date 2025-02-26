import React from 'react';
import Card from './Card';
import Data from './Data';
import './resume.css';

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experiências</h2>

      <div className="resume__container grid">

        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card key={id} icon={val.icon} year={val.year} title={val.title} desc={val.desc} />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card key={index} icon={val.icon} year={val.year} title={val.title} desc={val.desc} />
              );
            }
          })}
        </div>

      </div>
    </section>
  )
}

export default Resume