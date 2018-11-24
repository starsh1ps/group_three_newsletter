import React, { Component } from 'react';

const API = 'https://newsapi.org/v2/everything?q=breaking&'
const API_KEY =  'apiKey=c0d3cdcead124054be1cdf19f9d55faa'
class Mainnewsfetch extends Component
{
  constructor(props){
    super(props)
    this.state={
      data: []
    }
  }

   async componentWillMount () {
        try{
            const newsData = await fetch(API + API_KEY);
            const newsDataJSON = await newsData.json()
            await this.setState({
              data:newsDataJSON.articles
            }) 
            console.log(this.state.data)
          }catch(error){

          }

    
     }
  render() {

    return (
      <div>
        <h1>Breaking News</h1>
        
        
          {this.state.data.map((element,i)=>
            <div key={i} className="newsCard">
              <img src={element.urlToImage} alt="" className="newsImage"/>
              <h1>{element.title}</h1>
              <h2>{element.author}</h2>
              <p><a href={element.url}>read more</a></p>

            </div>)}
        
        
      </div>
    );
  }

}

export default Mainnewsfetch;