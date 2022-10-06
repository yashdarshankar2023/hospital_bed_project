import React from 'react';
const navbar = () => {
  
  const HomeScroll = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  const ProfessionalScroll = () =>{
    window.scrollTo({
      top: 800, 
      behavior: 'smooth'
    });
  };
  
  return (
    <div>
      <div className="navbar">
        <div onClick={HomeScroll} className="nav-items">Home</div>
        <div onClick={ProfessionalScroll} className="nav-items">Professional use</div>
        
        


      </div>
    </div>
  )
}

export default navbar