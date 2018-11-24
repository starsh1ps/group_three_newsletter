import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Navbar from './component/Navbar';
//import Cards from './component/Cards';
import Sportsfetch from './component/Sportsfetch';
import Mainnewsfetch from './component/Mainnewsfetch';
import Techfetch from './component/Techfetch';
import Culturefetch from './component/Culturefetch';

class App extends Component {
  constructor(){
        super();

        this.state = {
            MainNews:true,
            SportsNews: false,
            Technology:false,
            Culture:false,
            Weather:false
        }
    }

    setMainNews = () =>{

      this.setState({
            MainNews:true,
            SportsNews: false,
            Technology:false,
            Culture:false,
            
      })

    }

    setSportsNews = () =>{

      this.setState({
            MainNews:false,
            SportsNews: true,
            Technology:false,
            Culture:false,
            
      })

    }

    setTechNews = () =>{

      this.setState({
            MainNews:false,
            SportsNews: false,
            Technology: true,
            Culture:false,
            
      })

    }

    setCultureNews = () =>{

      this.setState({
            MainNews:false,
            SportsNews: false,
            Technology: false,
            Culture:true,
            
      })

    }

    setComponent = () =>{
      if (this.state.MainNews){
               return(<Mainnewsfetch/>);
      } else if (this.state.SportsNews){
          return(<Sportsfetch/>);
      } else if (this.state.Technology){
          return(<Techfetch/>)
      }
      else if (this.state.Culture){
        return(<Culturefetch/>)
      }
    }

  render() {
    return (
      <div className="App">
      <button onClick={this.setMainNews}>Main News</button>
      <button onClick={this.setTechNews}>Tech News</button>
      <button onClick={this.setCultureNews}>Culture News</button>
      <button onClick={this.setSportsNews}>Sport News</button>
      {this.setComponent()}
    
      

      
      
        </div>
        
    
      
    );
  }
}

export default App;
