import { Button } from '@mui/material';
import React from 'react';
import "../style/Login.css";

import {useGlobalContext} from "../StateProvider";

function Login() {
    const { signIn  } = useGlobalContext()
    
  return (
    <div className='login'>
        <div className="login__container">
            <img src="https://pbs.twimg.com/profile_banners/226632174/1469894657/1500x500" alt="" />
            <h1>Sign in to Programmer</h1>
            <p>random@gmail.com</p>
            <Button
            onClick={()=> signIn() }
            >Sign in with Google</Button>
        </div>
    </div>
  )
}

export default Login