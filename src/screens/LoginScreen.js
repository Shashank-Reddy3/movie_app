import React, { useState } from 'react';
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn,setSignIn]=useState(false)


    return (
        <div className='loginScreen'>
            <div className="loginScreen_bg">
                <img
                    src=
                    "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
                    alt=""
                    className="loginScreen_logo"
                     />

                 <button
                 onClick={()=>setSignIn(true)} 
                 className='loginScreen_btn'>
                    Sign In
                    </button>   
                    <div className="loginScreen_gradient">
                        </div> 
                <div className="loginScreen_body">

                    {signIn?(
                       <SignupScreen/> 
                    ):(
                        <>
                        <h1>
                     Unlimited films, TV programmes and more.
                        </h1>
                        <h2>Watch anywhere. Cancel at anytime</h2>
                        <h3>Ready to watch?Enter your email to create or restart your membership</h3>
                       <div className="loginScreen_input">
                        <form >
                            <input type="email"
                            placeholder='Enter Email Address' />
                            <button 
                            onClick={()=>setSignIn(true)}
                            className="loginScreen_start"
                            >
                                Get Started
                            </button>
                        </form>
                       </div>
                        </>

                    )}
                    
                </div>
            </div>

        </div>
    )
}

export default LoginScreen
