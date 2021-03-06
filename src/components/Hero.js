import React, { Component } from 'react';

import Card from './Card';
import '../css/hero.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-image">
        <div className="ui grid">
          <div className="two column row">
            <div className="left aligned hero-text column">
              <h1 className="hero-phrase toUpper">Local.</h1>
              <h1 className="hero-phrase toUpper">Comprehensive.</h1>
              <h1 className="hero-phrase toUpper bottom-skinny">Invaluable.</h1>
              <p className="hero-paragraph">The Index is Delmarva's hub for publicly available<br /> datasets, visualizations, and more.</p>
            </div>
            <div className="column">
              <div className="hero-card">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}