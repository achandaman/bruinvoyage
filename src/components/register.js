import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const registerUser = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
    }

    return(
        <body className="registerpg-body">
            <div class="container">
                <form class="registration-form">
                    <h1>Create your account</h1>
                        <div class="form-group">
                            <input className='un' type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <input className='un' type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                        <button
                            type="submit" 
                            onClick={registerUser}                        
                        >  
                            Sign up                                
                        </button>
                </form>
                <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                </p>  
            </div>
            
        </body>
    )
}

export default Register
