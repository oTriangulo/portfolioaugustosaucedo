import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">

        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">4</h3>
                <span className="about__subtitle">Projetos Concluídos</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">3</h3>
                <span className="about__subtitle">Projetos Em Andamento</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">1</h3>
                <span className="about__subtitle">Clientes Satisfeitos</span>
            </div>
        </div>  

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">2</h3>
                <span className="about__subtitle">Cursos Concluídos</span>
            </div>
        </div>  

    </div>
  )
}

export default AboutBox