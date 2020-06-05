import React, {Component} from 'react'
import axios from 'axios';
import './GifCard.css';

export class GifCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            gifUrl : '',
            term: this.props.term,
        }
    }



    componentDidMount(){
        let sterm = this.state.term;
        let url = `https://api.giphy.com/v1/gifs/search?api_key=9nyA05jjiNMrTb4CsnPDkfKArV9U5Gap&q='${sterm}'&limit=25&offset=0&rating=G&lang=en`;

        axios
            .get(url)
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
                <div className="gif-cards">
                    <img src={this.state.gifUrl[i]} alt="gif"/>
                </div>);
            passItems.push(this.state.gifUrl[i]
            )
        }

        return (
            <div className="Search-cards">
                {items}
            </div>
        )
    }
}

export default GifCard
