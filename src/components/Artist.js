import React, { Component } from "react";

export default class Artist extends Component {
  state = {
    artist: [],
    albums: []
  }

  fetchArtist = id => {
    const url = `https://cors-anywhere.herokuapp.com/api.deezer.com/artist/${id}/`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ artist: data });
      });
  }

  fetchAlbums = id => {
    const url = `https://cors-anywhere.herokuapp.com/api.deezer.com/artist/${id}/albums`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ albums: data.data });
      });
  }

  componentWillMount = () => {
    this.fetchArtist(this.props.match.params.id);
    this.fetchAlbums(this.props.match.params.id);
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.fetchArtist(this.props.match.params.id);
      this.fetchAlbums(this.props.match.params.id);
    }
  }

  render() {
    return <div className="artists">
        <header>
          <img src={this.state.artist.picture_medium} alt={this.state.artist.name} className="artist-avatar" />
          <h2 className="artist-name">{this.state.artist.name}</h2>
        </header>

        <div className="albums">
          <ul>
            {this.state.albums && this.state.albums.map(album => {
              return (
                <li key={album.id}>
                  <img src={album.cover_medium} alt={album.title} className="artist-album-cover" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>;
  }
}