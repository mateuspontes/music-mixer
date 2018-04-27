import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Artist from "./components/Artist";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <form className="search-form">
          <input type="text" placeholder="Search for artists or songs..."/>
        </form>

        <BrowserRouter>
          <Route path="/artists/:id" component={Artist} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
