import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = (email, pass)=>{
    return async(dispatch) =>{
        dispatch(checkingCredentials());
    }

}

export const startGoogleSignIn = () =>{
    return async(dispatch) =>{
        dispatch(checkingCredentials());
    }
}