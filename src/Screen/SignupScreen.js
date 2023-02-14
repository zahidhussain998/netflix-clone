import React, {useRef} from 'react';
import './SignupScreen.css';
import { auth } from '../firebase';


function SignupScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const register = (e) =>{
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
      
    }) 
    .catch((error)=>{
      alert(error.massage)
    }
    )


  };

  const signIn = (e) =>{
    e.preventDefault(  );
    auth
    .signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value

    )
    .then((authUser)=>{
      console.log(authUser)
    })
    .catch((error)=> alert(error.massage));
  };
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref={passwordRef}type='password' placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix? </span>
          <span className='signupScreen__link'onClick={register}>Sign up now.</span>
        </h4>
      
      </form>
      </div>
  )
}

export default SignupScreen;