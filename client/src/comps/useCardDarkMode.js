import React, { useEffect } from "react";






const useCardDarkMode = (changeMyParent) => {
changeMyParent.target.parentNode.parentNode.style=`
background-color:#000;
-webkit-text-fill-color:azure;
color:azure;
`
};



export default useCardDarkMode