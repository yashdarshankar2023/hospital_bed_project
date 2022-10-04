
import React from 'react'
import Image1 from "./assets/background1.jpg"
export const login = () => {


  return (
    <div className='login'>

      <div className="mask">
        <img className="image" src={Image1} alt="Image1" />

      </div>
      <div className="content-login">
        <form method="post" action="/getemail">

          <h1 class="headline_login">Professional Use</h1>
          <br /><br />
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"><b>Username</b></label>
            <br />
            <input type="text" class="form-control" id="username" aria-describedby="emailHelp" name="username" />
            <br />

          </div>
          <div class="mb-3">
            <br />
            <label for="exampleInputPassword1" class="form-label"><b>Password</b></label><br />
            <input type="text" class="form-control" id="password" name="password" /><br />

          </div>
          <div class="mb-3">
            <br />
            <label for="exampleInputPassword1" class="form-label"><b>Vacancy</b></label><br /><br />
            <input type="text" class="form-control" id="vacancy" name="vacancy" /><br /><br />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Submit</button>

        </form>

      </div>




    </div>
  )

}

export default login;