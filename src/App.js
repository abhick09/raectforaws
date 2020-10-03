import React from 'react';
import logo from './AWS.png';
import './App.css';
import Order from './postrequestMQ';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Order></Order>
      </header>
    </div>
  );
}

export default App;
