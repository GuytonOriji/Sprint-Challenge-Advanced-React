import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {Container} from 'reactstrap'
import Header from './comps/Header'
import Home from './comps/Home'
import About from './comps/About'
import axios from 'axios'





class App extends React.Component{
          constructor(){
            super()
            this.state={
              worldCupLogo:"logo.svg",
              aMedal:"medal.png",
              listOfWomen:[],


            }
          }


          componentDidMount(){

                console.log('after component is mounted listOfWomen state is',this.state.listOfWomen)
              //after component mounts fetch this data here below using axios
                  axios.get('http://localhost:5000/api/players').then(res=>{

                      this.setState({//set the data to state after I get it
                listOfWomen:res.data,
                       })

                  }).catch(err=>{//show me the error in console if I even get one that is... XD

                      throw Error(err)
                   
                  })
          }


          componentDidUpdate(){
             console.log('after update listOfWomen state is',this.state.listOfWomen)
          }





       render()  { 
         
           return (
             <Container className="App">
             <Header imgsrc={this.state.worldCupLogo}/>

               <Switch>
               <Route exact path='/'>
               <Home listOfWomen={this.state.listOfWomen} aMedal={this.state.aMedal}/>
               </Route>

               <Route  path='/about'>
               <About  aMedal={this.state.aMedal} />
               </Route>
               
               </Switch>
             </Container>
           );}
}

export default App;
