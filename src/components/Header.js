import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return <header className="app-header">
        <h1 className="app-title">
          <a href="/">Music Mixer</a>
        </h1>
      </header>;
  }
}