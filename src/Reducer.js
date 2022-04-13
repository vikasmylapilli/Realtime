import { SET_USER } from "./action";



const reducer = (state, action) =>{
    if(action.type = SET_USER){
        return {...state,
        user: action.payload.displayName,
        image: action.payload.photoURL,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber
    }
}
    return state
}

export default reducer;

// photoURL
//email