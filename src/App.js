import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LocaleInput from './components/LocaleInput';
import RepResults from './components/RepResults';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <LocaleInput/>
        <RepResults/>
      </div>
    );
  }
}

export default App;

