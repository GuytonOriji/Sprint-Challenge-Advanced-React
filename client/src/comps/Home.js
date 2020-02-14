import React from 'react'
import {  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap'
import styled from 'styled-components'

//nav bar that holds brand name on left and links on right
const Box = styled.div`
flex:1;
display:flex;
width:100%;
height:100%;
justify-content:space-between;
flex-direction:column;
align-items:center;
border-bottom:solid;
`;



const InBox = styled.div`
flex:1;
display:flex;
width:100%;
height:100%;
justify-content:space-between;
flex-direction:column;
align-items:center;
overflow-y:scroll;
`;


const del = e =>{
	e.target.parentNode.parentNode.remove()
}

const Home = props =>{

	console.log(props)

	return(
		<Box>
		<label htmlFor="List Of Woman Champs">
		List Of Woman Champs
		</label>
		
		<InBox>

		{
			props.listOfWomen.map(lady=>{

					return(

						 <Card key={lady.id} className="">
        <CardImg top width="100%" src={props.aMedal} alt="Card image cap" />
        <CardBody>
          <CardTitle>{lady.name}</CardTitle>
          <CardSubtitle>From: {lady.country}</CardSubtitle>
          <CardText>The amount of times searched: {lady.searches}</CardText>
          <Button onClick={del}>Remove</Button>
        </CardBody>
      </Card>

)
				
			})
		}
					
		</InBox>
		</Box>
		)
}




export default Home;