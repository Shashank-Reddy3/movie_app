import React,{useRef} from 'react';
 

import './SignupScreen.css'

function SignupScreen() {

  const emailref=useRef(null);
  const passwordref=useRef(null);

 


  const register=(e)=>{
    e.preventDefault();

    
  };

  const signIn=(e)=>{
    e.preventDefault();
  };
  return (
    <div className='signupScreen'>
        <form >
            <h1>Sign In</h1>
            <input ref={emailref} type="email" placeholder='Email' />
            <input ref={passwordref} type="password" placeholder='password' />
            <button type='submit' onClick={signIn}>Sign In</button>

          <h4>
            <span className="signupScreen_gray">New to Netflix?</span>
            <span className='signupScreen_link' onClick={register}>Sign Up now.</span>
          </h4>
        </form>


      
    </div>
  )
}

export default SignupScreen;
