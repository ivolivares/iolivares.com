import React from 'react'
import { email, domain, name, sendEmail } from '../../helpers/email'

export default () =>
  <div>
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__content-title">Hey, I'm <strong>Iván Olivares Rojas</strong></h1>
        <div className="hero__content-text">
          <p className="extra-large">I'm focused on building beautiful interfaces and experiences for customers.</p>
          <p className="large secondary-text">Currently work as Front-end software developer at <a className="globant" href="http://www.globant.com" target="_blank">Globant</a> from Santiago, Chile.</p>
          <p className="large secondary-text">Also I'm an amateur photographer, a enthusiast community builder<br />and volunteer for non-profit organizations.</p>
        </div>
        <div className="hero__content-action">
          <p className="secondary-text">
            Let's talk?&nbsp;
            <a
              className="link--primary link--underline email-protection"
              data-domain={ domain }
              data-name={ name }
              href="#"
              onClick={ sendEmail }>
              { email }
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>