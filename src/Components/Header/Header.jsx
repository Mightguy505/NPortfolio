import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Components/dhp.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Harsh Nayyar</h1>
        <h5 className="text-light">MERN Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt=" me" />
        </div>
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </header>
  )
}

export default Header