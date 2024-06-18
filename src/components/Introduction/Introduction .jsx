import React from 'react'
import "./Introduction .css"
import DynamicData from '../DynamicData/DynamicData';

const Introduction  = () => {
  return (
    <div className="introduction-container">
    <h1>Hello! I'm <DynamicData/></h1>
  
    <p>
      I'm a passionate MERN Full Stack Developer with a knack for building dynamic and responsive web applications. 
      With a strong foundation in MongoDB, Express.js, React, and Node.js, I enjoy creating seamless user experiences and efficient back-end solutions.
    </p>
    <p>
      My expertise spans across front-end development, back-end integration, and database management, enabling me to deliver full-fledged web solutions.
    </p>
    <p>
      Let's connect and build something amazing together!
    </p>
  </div>
  )
}

export default Introduction;
