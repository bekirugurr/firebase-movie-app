import { createContext, useState, useEffect} from "react";
import { userObserver } from "../auth/firebase";

//* bu consume kısmı. uygulamanın her yerinden AuthContext ile bunu çağırabiliyoruz. Ama önce provide etmemiz lazım
export const AuthContext = createContext();

//* Aşağıdaki component bir provider

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    userObserver(setCurrentUser)
  }, [])
  
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
