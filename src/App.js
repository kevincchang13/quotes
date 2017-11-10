import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import QuoteContainer from './QuoteContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <QuoteContainer/>
      </div>
    );
  }
}

export default App;
