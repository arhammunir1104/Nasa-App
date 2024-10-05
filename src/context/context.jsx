import { createContext, useEffect, useState } from "react";

export let Context = createContext();

export function ContextProvider({ children }) {
  let [username, setUsername] = useState(null);
  let [id, setId] = useState(null);

  useEffect(()=>{
    setUsername("Arham");
  }, [])


  return (
    <Context.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </Context.Provider>
  );
}
