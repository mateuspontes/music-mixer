import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Artist from "./components/Artist";
import './App.css';

class App extends Component {
  state = {
    search: ""
  };

  handleSearchChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  searchArtist = name => {
    const url = `https://cors-anywhere.herokuapp.com/api.deezer.com/search/artist?q=artist:%22${name}%22`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let artist = data.data[0];
        window.location.replace(`/artists/${artist.id}`);
      });
  };

  handleSearch = event => {
    event.preventDefault();
    this.searchArtist(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return <div className="container">
        <Header />

        <form className="search-form" onSubmit={this.handleSearch}>
          <input type="text" value={this.state.search} onChange={this.handleSearchChange} placeholder="Search for artists on Deezer..." />
        </form>

        <BrowserRouter>
          <React.Fragment>
            <Route path="/artists/:id" component={Artist} />
          </React.Fragment>
        </BrowserRouter>
      </div>;
  }
}

export default App;
