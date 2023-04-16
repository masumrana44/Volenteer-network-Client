import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const UserContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  //   Login With Google
  const googleProvider = new GoogleAuthProvider();
  const LoginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Log Outing
  const logOuting=()=>{
  return  signOut(auth)
  }

  //   manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("auth State changed", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, LoginWithGoogle,logOuting };
  return (
    <div>
      <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    </div>
  );
};

export default AuthContext;
