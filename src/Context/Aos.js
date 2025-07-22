import React, { createContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AosContext = createContext();

export const AosProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return(
    <AosContext.Provider value={{ AOS }}>
      {children}
    </AosContext.Provider>
  )
};
