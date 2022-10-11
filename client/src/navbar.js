import React from 'react';
import { Link } from 'react-router-dom';
import "./css/navbarstyles.css"
const navbar = () => {
  
  
  
  return (
    <div>
      <div className="navbar">
        <Link to="/"><div className="nav-items">Home</div></Link>
        <Link to="/professional"><div className="nav-items">Professional use</div></Link>
        <Link to="/data"><div className="nav-items">Common  use</div></Link>
        
        
        


      </div>
    </div>
  )
}

export default navbar