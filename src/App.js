import React from 'react';
import './App.css';
import Gauge from './components/Gauge';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Gauge/>
      </div>
    );
  }
}

export default App;
