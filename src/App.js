import React, { Component } from "react";
import logo from "./logo.svg";
import lettrage from "./lettrage.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={lettrage} alt="John" />
        </div>
      </div>
    );
  }
}

export default App;
