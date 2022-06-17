import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {

      constructor() {
        console.log("Constructor");
        super();
        this.state = {
          articles: [],
          loading: false
        }
      }

      async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=eed3e87a3e12452f9bf3a218d75cb8e6";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
      }
    
      render() {
        console.log("render");
        return (
          <div className='container my-3'>
            <h2>Top Headlines.</h2>
            <div className="row">
              {this.state.articles.map((element) => {
                return <div key={element.url} className="col-md-4">
                  <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              })}
            </div>
          </div>
        )
      }
      }

