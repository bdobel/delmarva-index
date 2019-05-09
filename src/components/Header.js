import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

import logoSVG from '../img/logo.svg';
import '../css/header.css';

export default class Header extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div> 
        <div id="navbar" className="ui secondary pointing menu">
          {/* Link is react-router element.  Replace anchor html tag. doesn't dump html file and fire new request.  See App_v1 */}
          <a to="/" className="item">
            <img className='logo' src={logoSVG} alt='logo' />
          </a>
          <div class="right menu">
            <a to="/about" id="link" className="item">
              About Us
            </a>
            <a to="/" id="link"className="item">
              Catalog
            </a>
            <a to="/" id="link" className="item">
              Apps
            </a>
          </div>
        </div>
      <div id="navbar-extra"></div>
      </div>
    );
  }
}
