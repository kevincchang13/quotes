import React, { Component } from 'react';

class NewQuoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.message !== "") {
            // this.props.addQuote(this.state);
            this.setState({
                message: ""
            })
        }
    }

    render() {
        return(
            <div className='add-quote'>
                <div className='new-quote-label'>
                    <h3>Add a Quote:</h3>
                </div>
                <form onSubmit={this.handleSubmit} class='add-quote-form'>
                    <div>
                        <label>
                            Quote: &nbsp;
                            <textarea
                                style={{height:'45px', width:'400px', resize:'none'}}
                                maxLength='160'
                                onChange={this.handleChange}
                                placeholder='Type message here'
                                name='message'
                                value={this.state.message}
                            />
                        </label>
                        &nbsp;
                        <input type='submit' value='Add Message'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewQuoteForm
