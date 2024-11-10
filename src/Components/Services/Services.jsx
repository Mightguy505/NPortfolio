import React from 'react'
import './services.css'
import { IoMdCheckmark } from "react-icons/io";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
          <article className='service'>
                 <div className="service__head">
                  <h3>Databases</h3>
                 </div>
                 <ul className='service__list'>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>mplementing structured (SQL) and unstructured (NoSQL) databases to handle various types of data and ensure fast querying.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Ensuring that your data is protected with secure database access controls, encryption, and backup solutions.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Seamlessly integrating databases with your application’s back-end to ensure smooth data flow and synchronization.</p></li>
                 </ul>
          </article>
          
          <article className='service'>
                 <div className="service__head">
                  <h3>Web Development</h3>
                 </div>
                 <ul className='service__list'>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>I build visually appealing and fully responsive websites using React.js, HTML5, and CSS3</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>I develop tailor-made web applications that are intuitive, fast, and scalable by leveraging the power of React.js</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p> Creating seamless and dynamic user interfaces by prioritizing usability and accessibility, while ensuring modern design principles.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Ensuring that your web applications function smoothly across different browsers and devices, providing a consistent experience.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p> I provide end-to-end services, including deployment on platforms like Hostinger, to make sure your website is live, secure, and fast.</p></li>
                 </ul>
          </article>

          <article className='service'>
                 <div className="service__head">
                  <h3>Backend Development</h3>
                 </div>
                 <ul className='service__list'>
                 
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Building robust and scalable APIs with Express.js and Node.js to handle data processing and authentication.
                  </p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Ensuring efficient server-side functionality with Node.js,delivering fast, reliable, and secure performance.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p> Implementing secure user authentication systems and authorization protocols to protect your web applications.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Enhancing back-end performance to ensure your applications run smoothly,with optimized request handling and efficient server responses.</p></li>
                 </ul>
          </article>
        
      </div>
    </section>
  )
}

export default Services
