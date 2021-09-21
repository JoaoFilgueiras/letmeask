import { createContext, useState, useEffect, ReactNode } from 'react';
import { firebase, auth } from '../services/firebase';

type User = {
    id: string,
    name: string,
    avatar: string
}

type AuthContextType = {
    user: User | undefined,
    singnInWihGoogle: () => Promise<void> ,
}

type AuthContextProviderProps = {
    children: ReactNode,
};

const AuthContext = createContext({ } as AuthContextType);

const AuthContextProvider = ({children} : AuthContextProviderProps) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(us => {

            if(!us) {
                throw new Error("Missing information from Google Authentication"); 
            }

            const {displayName, photoURL, uid} = us;

            if (!uid || !displayName || !photoURL) {
                throw new Error("Missing information from Google Authentication");
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const singnInWihGoogle = async() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider);
        if (res.user) {
            const {displayName, photoURL, uid} = res.user;

            if (!uid || !displayName || !photoURL) {
                throw new Error("Missing information from Google Authentication");
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    };

    return(
        <AuthContext.Provider value={{user, singnInWihGoogle}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext};