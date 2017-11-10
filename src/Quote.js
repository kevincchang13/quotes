import React, { Component } from 'react';

class Quote extends Component {
    render() {
        const {message} = this.props;
        return(
            <div className='quote'>
                <div className='message'>{message}</div>
            </div>
        )
    }
}

export default Quote;
