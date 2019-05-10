import React, { Component } from 'react';
import Card from './Card';

import '../css/showcase.css';

export default class Showcase extends Component {
  render() {
    return (
      <div className="ui container center aligned">
        <div className="showcase-phrase">
          <h1>Popular resources helping users...</h1>
        </div>
        <div className="ui grid">
          <div className="three column row">
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
