import React, {Component} from 'react'
import axios from 'axios';

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

        return (
            <div>
                <h2>{this.state.gifUrl}</h2>
                {console.log(this.props.term)}
            </div>
        )
    }
}

export default GifCard
