import React from 'react'
import { Link } from 'react-router-dom'
import "../css/HomeStyle.css"
const Home = () => {
  return (
    <div className='home'>
      <br /><br />
      <h1>This is a Home Page click below button for there uses</h1>
      <br /><br /><br />
      <div className='home_buttons'>
        <Link to="/data" className='home_link'><button className='home_btn'>Common Use</button></Link>
        <br />
        <Link to="/professional" className='home_link'><button className='home_btn'>Professional</button></Link>


      </div>
      <br/>
      <div className='home_desc'>
        <div className='home_desc1'>this button is for common use, anyone can use it to see the current vacancy of hospitals</div>
        <br />
        <div className='home_desc1'>this button is only for hospital official only authenticated users should use it.</div>


      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />



    </div>
  )
}

export default Home