import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../components/auth.init";

export const Authcontext=createContext(null);


const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const name='abc';
    const authInfo={
        name,
        createUser
    }
    return (
       <Authcontext.Provider value={authInfo}>
       {children}

       </Authcontext.Provider>
    );
};

export default AuthProvider;