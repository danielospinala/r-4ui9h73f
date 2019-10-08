import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
   super(props);
   this.state = {
    value:""
    }
  };
  coun = (event) => {
  this.setState({ value: event.target.value });
}


  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.coun} />
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }
}

export default App;
