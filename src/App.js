import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import QuoteContainer from './QuoteContainer'
import NewQuoteForm from './NewQuoteForm'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <NewQuoteForm/>
          <QuoteContainer/>
      </div>
    );
  }
}

export default App;
