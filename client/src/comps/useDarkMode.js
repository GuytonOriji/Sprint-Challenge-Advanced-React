import React, { useEffect } from "react";






const useMyHook = (changeMyParent) => {

	const html = document.querySelector("html")
	const rooter =	document.querySelector("#root")

				if(document.querySelector(".dark-mode")){
					rooter.classList.remove("dark-mode")
					rooter.classList.add("light-mode")
					html.classList.remove("dark-mode")
					html.classList.add("light-mode")

					
				}else{
						rooter.classList.remove("light-mode")
					rooter.classList.add("dark-mode")
					html.classList.remove("light-mode")
					html.classList.add("dark-mode")

				}



};



export default useMyHook