import React, { useEffect } from "react";
import {useLocalStorage} from './useLocalStorage'





const useMyHook = (changeMyParent) => {

	const html = document.querySelector("html")
	const rooter =	document.querySelector("#root")
	const cardz =	document.querySelectorAll(".card")



				 const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (darkMode) {
    				cardz.forEach(card=>{

    					card.classList.add("dark-mode")
    				})
        	html.classList.add("dark-mode");
        	rooter.classList.add("dark-mode");}
    else {

    					cardz.forEach(card=>{

    					card.classList.remove("dark-mode")
    				})
    
        	html.classList.remove("dark-mode");
        rooter.classList.remove("dark-mode");}
  }, [darkMode]);

  return [darkMode, setDarkMode];



};



export default useMyHook