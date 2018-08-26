import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';
import SocketIO from 'socket.io-client';

const SERVER_URL = 'localhost:3030';

class App extends Component {
  componentDidMount() {
    const socket = SocketIO(SERVER_URL);
    socket.on('Hello', data => {
      console.log('connected', data);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <br />
        <Chat />
      </div>
    );
  }
}

export default App;
