import React, { Component } from 'react';

import './App.css';
import Header from '../modules/shared/header/header-component/Header';

class App extends Component {
  render() {
    /* Este return devuelve un JSX, es decir, un html extendido a JavaScript */
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
