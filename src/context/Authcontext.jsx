import { createContext,  useState } from "react";
import axios from "axios";

export const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [auth, setauth] = useState(false);
  const [token, settoken] = useState("");  

  const gettoken =(email,pass) =>{
    
    axios
    .post("https://reqres.in/api/login", {
      // email: "eve.holt@reqres.in",
      // password: "cityslicka",

      email: email,
      password: pass,
    })
    .then((e) => {
      console.log(e);       
      settoken(e.data.token);
    });
  }


  

  return (
    <Authcontext.Provider value={{ auth ,token, settoken, gettoken, setauth}}>
      {children}
    </Authcontext.Provider>
  );
};
