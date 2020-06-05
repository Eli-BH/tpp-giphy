import React, { Component } from 'react'
import GifCard from './GifCard';
import './SearchField.css'

export class SearchField extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        
    }


    render() {
        const value = this.state.value;
        return (
            <div className ="Search-div">
                <h1>Search for Gifs: </h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type = 'text'
                        value = {this.state.value}
                        onChange = {this.handleChange}
                    />
                    <input type = "submit" value = "Search" />
                </form>
                <h1>{value}</h1>
                <GifCard term = {value}/>
            </div>
        )
    }
}

export default SearchField
