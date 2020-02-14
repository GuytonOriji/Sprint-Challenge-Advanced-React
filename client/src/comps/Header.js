import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import useDarkMode from './useDarkMode'

//nav bar that holds brand name on left and links on right
const Nav = styled.div`
flex:1;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:solid;
`;

//brand name with image
const Brand = styled.figure`
flex:.5;
display:flex;
width:auto;
flex-direction:column;
justify-content:space-between;
align-items:center;
`;

//links ...probably wont do nothing...we'll see
const LinksHolder = styled.figure`
flex:1;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;

font-size:1.3rem;
`;


//this is probably one of the last comments I can feel myself slowing down

const imggy = {
	filter:"drop-shadow(1px 1px 1px #fff)"
}



const Header = props =>{



	return(
		<Nav>
			<Brand>
				<img src={props.imgsrc} style={imggy} width='50px' height="50px" />
				<figurecaption>World Cup</figurecaption>
			</Brand>



			<LinksHolder>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<a onClick={useDarkMode}>DarkMode</a>
			</LinksHolder>
		</Nav>
		)
}




export default Header;