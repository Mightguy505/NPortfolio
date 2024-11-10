import React from 'react'
import './portfolio.css'
import Githubimage1 from '../../../src/Components/shubhyaatra.png'
import githubimage2 from '../../../src/Components/githubimage2.png'
import github3 from '../../../src/Components/netflix.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Githubimage1} alt="Loading" />
          </div>
            <h3>Shubhyaatra - Tours and Travel</h3>
            <div className="portfolio__item-cta">
             <a href="https://github.com/Mightguy505/SHUBHYAATRA" target="_blank" className='btn'>Github</a>
             <a href="https://lightslategray-pony-879745.hostingersite.com/"  target="_blank" className='btn'>Live Demo</a>
             </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={githubimage2} alt="Loading" />
          </div>
            <h3>React News App</h3>
            <div className="portfolio__item-cta">
             <a href="https://github.com/Mightguy505/React-News-App" target="_blank" className='btn'>Github</a>
             <a href="https://github.com/Mightguy505/React-News-App" target="_blank" className='btn'>Live Demo</a></div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={github3} alt="Loading" />
          </div>
            <h3>Netflix-(Frontend)</h3>
            <div className="portfolio__item-cta">
             <a href="https://github.com/Mightguy505/Netflix-Clone"  target="_blank" className='btn'>Github</a>
             <a href="https://ghostwhite-emu-368085.hostingersite.com/" target="_blank" className='btn'>Live Demo</a>
             </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
