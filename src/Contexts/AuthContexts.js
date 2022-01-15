import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext({
  currentUSer: null,
  register: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUSer, setCurrentUser] = useState(null);

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email.password);
  }
  const value = {
    currentUSer,
    register,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
