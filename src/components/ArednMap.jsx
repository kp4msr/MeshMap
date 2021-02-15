import {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import React from 'react'

export default class ArednMap extends Component {

  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 17.8008,
      longitude: -66.2901,
      zoom: 8.5 
    }
  };

  render() {
    return (
      <ReactMapGL 
      mapboxApiAccessToken="pk.eyJ1Ijoia3A0bXNyIiwiYSI6ImNraDloZGE5azBwZ2Mycm11cXkxbmR3ZmUifQ.HdZfYYNI6sd2GHRrlp7tkQ"
      mapStyle="mapbox://styles/kp4msr/ckhe3c9c20apk19nu4jnchf8s"  
      {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}