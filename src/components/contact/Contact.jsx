import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Entre em contato</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Venha falar comigo e desenvolver seu projeto</h3>
          <p className="contact__details"> Não gosta de falar? Me mande um email :D</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">

            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insira seu nome' />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Insira seu email' />
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insira o assunto' />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder='Insira sua mensagem'></textarea>
            </div>

            <button className="btn">Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact