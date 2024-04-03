// import './register.css';
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 

    return(
        <body className="registerpg-body">
            <div class="container">
                <form class="registration-form">
                    <h1>Login</h1>
                    <div class="form-group">
                        <input className='un' type = 'text'placeholder= 'enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <input className='un' type = 'password' placeholder= 'enter password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                                <button                                    
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                     </div>  
                </form>
                <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/register">
                                Sign up
                            </NavLink>
                </p>
             </div>
        </body>
    )
}

export default Login