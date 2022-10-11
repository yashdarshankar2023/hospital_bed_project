import React from 'react'
import { Link } from 'react-router-dom';

const prof_register = () => {
  return (
    <div className='prof_register'>
      <h1>Registration Form</h1>
      <br /><br /><br />

      <form method="post" action="/Pregister">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Username</label><br />
          <input type="text" class="form-control" id="usernameregister" aria-describedby="emailHelp" name="usernameregister" /><br />
          <div id="emailHelp" class="form-text">Try to make it unique as possible</div><br /><br />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label><br />
          <input type="text" class="form-control" id="passwordregister" name="passwordregister" /><br />
          <div id="emailHelp" class="form-text">Try make combination of different letter,digit,symbols</div><br /><br />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Confirm Password</label><br />
          <input type="text" class="form-control" id="password1register" name="password1register" /><br />
          <div id="emailHelp" class="form-text">Try make combination of different letter,digit,symbols</div><br /><br />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Application ID</label><br />
          <input type="number" class="form-control" id="r_appid" name="r_appid" /><br /><br />

        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Contact</label><br /><br />
          <input type="number" class="form-control" id="number" name="number" /><br /><br />

        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Current Vacancy</label><br /><br />
          <input type="number" class="form-control" id="r_vacancy" name="r_vacancy" /><br /><br />

        </div>



        <button type="submit" class="btn btn-primary">Register</button>


      </form>

      <span><i>if you want to return to login page :- </i></span>
      <Link to="/professional">Professional Register</Link>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </div>
  )
}

export default prof_register