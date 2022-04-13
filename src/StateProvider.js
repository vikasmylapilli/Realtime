import React, { useState, useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './Reducer';
import { SET_USER } from './action';
import { auth, provider } from './firebase';

const StateContext = createContext();

const initialState ={ 
    user : "",
    image:'',
    email:'',
    phoneNumber:""
}

const StateProvider =({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({type :"SET_USER", payload: result.user})
        }).catch(error =>{
            alert(error.message);
        });

    }
return (
    <StateContext.Provider 
    value ={{
        ...state, 
        signIn
    }}>
        {children}
    </StateContext.Provider>
)
}

export const useGlobalContext = ()=> {
    return useContext(StateContext)
}

export {StateContext, StateProvider}