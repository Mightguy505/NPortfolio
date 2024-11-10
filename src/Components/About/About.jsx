import React from 'react'
import './about.css'
import ME from '../../Components/dhp.png'
import { BsAwardFill } from "react-icons/bs";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ ME } alt="About image" />
          </div>
        </div>
        <div className="about__content">
        <p>A creative problem solver and passionate MERN stack developer, I specialize in building high-performance web applications that don’t just work—they wow. With hands-on expertise in MongoDB, Express.js, React.js, and Node.js, I deliver full-stack solutions that merge sleek front-end designs with powerful, scalable back-end systems.
        </p>
        <p className='ac'>What drives me? The thrill of transforming complex ideas into seamless digital experiences. I don’t just code; I craft intuitive interfaces and optimize performance to give users a smooth, fast, and engaging experience.</p>
        
        <a href="#contact" className='btnlt btn-primary'>Let's Talk</a>
       </div> </div>
      
    </section>
  )
}

export default About
