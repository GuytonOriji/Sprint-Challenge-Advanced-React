import React from 'react'
import {Container} from 'react-bootstrap'
import {Card, CardBody, CardTitle, CardText} from 'reactstrap'
 
const abtPage = {
display:"flex",
padding:"100px 0px",
flexDirection:"column",
justifyContent:"space-between",
gridGap:"100px"
}

const abtCard = {
backgroundColor:"rgba(0,0,0,0)",
border:"double 10px #e27d60"
}

let title = {
textDecoration:"underline",
decorationLnePosition:"under",
fontFamily:' Sriracha, cursive',
textAlign:"center",

}

const abtCardBody = {
fontFamily:' Sriracha, cursive',
textAlign:"center",
}




const banners ={
backgroundColor:"#16235a",
fontFamily:"'Sriracha', cursive",
fontWeight:"bolder",
WebkitTextFillColor:"azure",
fontSize:"1.3rem",
borderRadius:'0%'
}



const bodyy ={
backgroundColor:"#2a3457",
fontFamily:"'Sriracha', cursive",
fontWeight:"bolder",
fontSize:"1.3rem",
color:"azure"

}

const socialist ={
display:"flex",
justifyContent:"space-between",
listStyle:"none",
width:"100%",
flex:"1",
alignItems:"center",
padding:"0"

}




const imgyy = {
flex:"1",

}


const cardio = {
borderRadius:"0%"
}

let xox = {

}








function About(props){



window.onresize=()=>{

if(window.innerWidth<=900 && window.innerWidth>=500 && window.innerHeight<=500){
document.querySelector(".xox").style=`
display:flex;
flex-direction: column;
justify-content:space-between;
grid-gap:50px;
margin:0;
`;
document.querySelector(".lgBtn").style=`
margin: 5px 0px;
background-color:rgb(195, 140, 158);
font-size:1.4rem;
font-weight:bolder;
box-shadow:0 0 5px #000;
`;
}

if(window.innerWidth<=500){
}

}

window.onload=()=>{

if(window.innerWidth<=900 && window.innerWidth>=500 && window.innerHeight<=500){
document.querySelector(".xox").style=`
display:flex;
flex-direction: column;
justify-content:space-between;
grid-gap:50px;
margin:0;
`;

document.querySelector(".lgBtn").style=`
margin: 5px 0px;
background-color:rgb(195, 140, 158);
font-size:1.4rem;
font-weight:bolder;
box-shadow:0 0 5px #000;
`;
}

if(window.innerWidth<=500){
document.querySelector(".lgBtn").style=`
margin: 5px 0px;
background-color:rgb(195, 140, 158);
font-size:1.4rem;
font-weight:bolder;
box-shadow:0 0 5px #000;
`;

}

}


return (


<Container style={abtPage}>

<Card style={abtCard}>
<CardTitle><h1 style={title} className='titezzzz'>Womans World Cup</h1></CardTitle>
<CardBody>
</CardBody>
</Card>




<div  style={xox} className="card-deck xox">
<div className="card"  style={cardio}>
<img src={props.aMedal} className="card-img-top" alt=" me coding"  style={imgyy}/>
<div className="card-body" style={bodyy}>
<h5 className="card-title">Womens</h5>
<p className="card-text">Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book.</p></div>
<div className="card-footer" style={banners}>
<small className="text-muted">Last updated 1 week ago</small>
</div>
</div>
<div className="card"  style={cardio}>
<img src={props.aMedal} className="card-img-top" alt="my student programming"   style={imgyy}/>
<div className="card-body" style={bodyy}>
<h5 className="card-title">World</h5>
<p className="card-text">Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book.</p></div>
<div className="card-footer" style={banners}>
<small className="text-muted">Last updated 3 days ago</small>
</div>
</div>
<div className="card"  style={cardio}>
<img src={props.aMedal} className="card-img-top" alt="my camera"   style={imgyy}/>
<div className="card-body" style={bodyy}>
<h5 className="card-title">Cup</h5>
<p className="card-text">Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book.</p></div>
<div className="card-footer" style={banners}>
<small className="text-muted">Last updated 10 hours ago</small>
</div>
</div>
</div>


<ul style={socialist} className='socialist'>
<li><i className="fab fa-facebook"></i></li>
<li><i className="fab fa-linkedin"></i></li>
<li><i className="fab fa-pinterest"></i></li>
<li><i className="fab fa-snapchat"></i></li>
</ul>
</Container>


)
}



export default About