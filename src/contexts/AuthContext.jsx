import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext({logged: false, update: () => {}});

const AuthProvider = ({children}) => {
  const [logged, setLogged] = useState(false);
  const [pending, setPending] = useState(true);
  const update = () => {
    checkUser();
  }

  const checkUser = () => {
    setPending(true);
    setLogged(false);
    // Connecter a la bd verifier ...
    const logged = sessionStorage.getItem('logged');
    if(logged != null) {
     setLogged(JSON.parse(logged));
    }
    setPending(false);
  }

  useEffect(() => {
    checkUser();
  }, []);

  const value = {logged, update};

  return pending ?
    <div>Chargement ....</div> :
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

const useAuthContext = () => {
  const {logged, update} = useContext(AuthContext);

  return {logged, update};
}

export {useAuthContext, AuthProvider};
