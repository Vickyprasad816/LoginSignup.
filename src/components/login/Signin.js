import React from 'react'
import google from '../image/google.png'
import facebook from '../image/facebook.png'
import apple from '../image/apple.png'
import './Signin.css';
function Signin() {

  return (
    <div className='bg'>
      <div className="container">
        <div className="content">
          <p>Welcome to Imagegallery</p>
          <h1>Sign in</h1>
          <div className="left">
            <p>No Account ?</p>
            <p style={{ color: 'green' }}>Sign up</p>
          </div>
          <div className="g-sign">
            <img src={google} alt='google' className='icon' />Sign in with google
          </div>
          <div className="facapple">
            <img src={facebook} alt='facebook' className='icon' />
            <img src={apple} alt='apple' className='icon' />
          </div>
          <div className="element">
            <label for="text"><b>Enter your username or email address</b></label><br/>
            <input type="text" id="text" name="text"  className='input' placeholder='Username or email addreess'/><br />
            <label for="password"><b>Enter your Password</b></label><br/>
            <input type="password" id="password" name="password" className='input'  placeholder='Password'/>
            <span className='forget'>Forget password</span>
          </div>
        </div>
        <button className='submit'>Sign in</button>
      </div>
    </div>
  )
}

export default Signin