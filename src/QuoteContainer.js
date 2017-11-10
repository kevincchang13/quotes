import React, { Component } from 'react';
import axios from 'axios';
import Quote from './Quote';

class QuoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [
                {
                    id: 0,
                    message: 'this is the first message'
                },
                {
                    id:1,
                    message: 'this is the second message'
                },
                {
                    id:2,
                    message: 'this is the third message'
                }
            ]
        }
    }

    // componentDidMount() {
    //     axios.get('https://api.forismatic.com/api/1.0/')
    //         .then(response => console.log(response))
    // }

    render() {

        let quotes = this.state.quotes.map(q => (
            <Quote
                key = {q.id}
                message = {q.message}
            />
        ));

        return (
            <div className='quote-container'>
                {quotes}
            </div>
        )
    }
}

export default QuoteContainer;
