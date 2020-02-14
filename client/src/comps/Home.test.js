import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from './Home.js';






//seeing if form renders and matches snapshot that I think will be created also...we'll see
it("renders Page without crashing matches snapshot created", () =>{
    const { asFragment , getByLabelText} = render(<Home />);

    expect(asFragment()).toMatchSnapshot();


    const textOnPage = getByLabelText(/List Of Woman Champs/i)
    

  expect(textOnPage).toBeInDocument()
  
})



// it("also has the first card fetched from data, if 1 is there they are all there", ()=>{
// const { byText } = render(<Home />);

// 		const cardWithThisLady = 
// })






