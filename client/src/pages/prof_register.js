import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const prof_register = () => {
  return (
    <div className='prof_register'>
      <br />
      <h1>Registration Form</h1>
      <br /><br />

      <form method="post" action="/Pregister">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Hospital Name</label><br />
          <input type="text" class="form-control" id="usernameregister" name="usernameregister" pattern="^[a-zA-Z]+$" placeholder='Enter the name of the Hospital' required /><br />
          <div id="emailHelp" class="form-text">Try to make it unique as possible</div><br /><br />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label><br />
          <input type="password" class="form-control" id="passwordregister" name="passwordregister" placeholder='Enter the password'required /><br />
          <div id="emailHelp" class="form-text">Try make combination of different letter,digit,symbols</div><br /><br />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Confirm Password</label><br />
          <input type="password" class="form-control" id="password1register" name="password1register" placeholder='Enter the password'required /><br />
          <div id="emailHelp" class="form-text">Try make combination of different letter,digit,symbols</div><br /><br />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Application ID</label><br />
          <input type="number" class="form-control" id="r_appid" name="r_appid" min="0" placeholder='Enter the application ID for your Hospital'required /><br /><br />

        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Contact</label><br /><br />
          <input type="number" class="form-control" id="number" name="number" maxLength={10} min="10" placeholder='Enter the contact number here'required /><br /><br />

        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Current Vacancy</label><br /><br />
          <input type="number" class="form-control" id="r_vacancy" name="r_vacancy" min="0"  placeholder='Enter the current vacancy of the hospital'required /><br /><br />

        </div>



        <button type="submit" class="btn btn-primary">Register</button>


      </form>
      <br />
      <span><i>if you want to return to login page :- </i></span>
      <Link to="/professional">Professional Register</Link>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  )
}

export default prof_register