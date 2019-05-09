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
          <div className="right menu middle aligned">
            <a to="/" className="item " id="color-di-blue">
              About Us
            </a>
            <a to="/" className="item">
              Catalog
            </a>
            <a to="/" className="item">
              Apps
            </a>
          </div>
        </div>
        <div class="ui items">
          <div class="item">
            <div class="ui small image">
              word
            </div>
            <div class="middle aligned content">
              <div class="header">
                Middle Aligned
              </div>
            </div>
          </div>
        </div>
        <div id="navbar-extra"></div>
      </div>

      // <Menu stackable>
      //   <Menu.Item>
      //     <img className='logo' src={logo} alt='logo' />
      //   </Menu.Item>

      //   <Menu.Item
      //     name='features'
      //     active={activeItem === 'features'}
      //     onClick={this.handleItemClick}
      //   >
      //     Features
      //   </Menu.Item>

      //   <Menu.Item
      //     name='testimonials'
      //     active={activeItem === 'testimonials'}
      //     onClick={this.handleItemClick}
      //   >
      //     Testimonials
      //   </Menu.Item>

      //   <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
      //     Sign-in
      //   </Menu.Item>
      // </Menu>
    );
  }
}
