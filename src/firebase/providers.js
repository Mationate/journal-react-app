import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() =>{
    try{
        const result = await signInWithPopup(firebaseAuth)
    } catch(error) {

    }
}