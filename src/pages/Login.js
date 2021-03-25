import { Button } from '@material-ui/core';
import React from 'react';

import { useAuthValue } from '../Auth/AuthProvider';
import {auth,gprovider} from '../Firebase';
import {actionTypes} from '../Auth/reducer';

import '../styles/login.css';

function Login() {
    const [state, dispatch] = useAuthValue();

    const signIn = () =>{
        auth.signInWithPopup(gprovider)
        .then(
            (result)=>{
                console.log(result);
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                })
            }).catch(
            (error)=>{
                alert(error.message)
            });
    }


    return (
        <div className="login">
            <div className="login_container" >
                <img src={'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'} alt='' />
                <h1>My First React App</h1>
                <p>Safe Login with Google(Firebase Auth)</p>
                <Button onClick={signIn} > Sign In with Google </Button>
            </div>

        </div>
    )
}

export default Login
