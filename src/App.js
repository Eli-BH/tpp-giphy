import logo from './logo.svg';
import SearchField from './Components/SearchField.js'
import GifCard from './Components/GifCard.js'
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifUrl: ''
    }

  }

  componentDidMount(){
    axios
    .get('https://api.giphy.com/v1/gifs/trending?api_key=9nyA05jjiNMrTb4CsnPDkfKArV9U5Gap&limit=10&rating=G')
    .then((response) => {
        const data = response.data; 
        const newGifs = [];
        for(let i = 0; i < data.data.length; i++){
            newGifs.push(data.data[i].images.fixed_width.url)
        };


        this.setState({gifUrl: newGifs})

    }).catch((err) => console.log(err))            
    
  }




  render() {
    const items = [];
    const passItems = []; 
    for(let i = 0; i < this.state.gifUrl.length; i++){
        items.push(
            <div>
                <img src={this.state.gifUrl[i]} alt="gif"/>
            </div>);
        passItems.push(this.state.gifUrl[i]
        )
    }
    let trending = (this.state.trending) ? <h3>Trending Giphy Gifs</h3>: <h1>Giphy Gifs</h1>;

    return (
      <div>
            <h1 id="App-div-heading">Trending Gifs</h1>
            <div className="gifs">
              {items}
            </div>
            <SearchField />
      </div>
    )
  }
}

export default App;



