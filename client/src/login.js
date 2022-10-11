import React from 'react'
import { Link } from 'react-router-dom';
import "../src/css/loginStyle.css"
export const login = () => {
  return (
    
    <div className='login'>
      <br/>

      
      <div className="content-login">
        <form method="post" action="/getemail">

          <h1 class="headline_login">Professional Use</h1>
          <br /><br />
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"><b>Hospital ID</b></label>
            <br />
            <input type="number" class="form-control" id="appid" aria-describedby="emailHelp" name="appid" min="0" placeholder='Enter the Hospital ID'  required/>
            <br />

          </div>
          <div class="mb-3">
            <br />
            <label for="exampleInputPassword1" class="form-label"><b>Password</b></label><br />
            <input type="password" class="form-control" id="password" name="password" placeholder='Enter your password' required /><br />

          </div>
          <div class="mb-3">
            <br />
            <label for="exampleInputPassword1" class="form-label"><b>New Vacancy</b></label><br /><br />
            <input type="number" class="form-control" id="vacancy" name="vacancy" min="0" placeholder='Enter the new vacancy' required/><br /><br />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Change</button>

        </form>

      </div>
      <br/>

      <span><i>if you don't have an account yet click the following link :- </i></span>
    <Link to="/proff_register">Professional Register</Link>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


    </div>
    
  )
}
export default login;