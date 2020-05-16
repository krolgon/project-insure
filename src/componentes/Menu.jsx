import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Logo from '../imagens/logo.svg';

import '../css/basico.css';

import ReactJoyride from '../guide_map/Guide';

const Menu = () => {
  return (
    <React.Fragment>
      <ReactJoyride></ReactJoyride>
      <nav class='step-1'>
        <div class='nav-wrapper grey lighten-5'>
          <a href='#' class='brand-logo margin-left-5'>
            <img src={Logo}></img>
          </a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <a class='color-font-menu step-2' href='sass.html'>
                HOW WE WORK
              </a>
            </li>
            <li>
              <a class='color-font-menu' href='badges.html'>
                BLOG
              </a>
            </li>
            <li>
              <a class='color-font-menu' href='collapsible.html'>
                ACCOUNT
              </a>
            </li>
            <li>
              <a
                class='waves-effect waves-light btn grey darken-4'
                href='collapsible.html'
              >
                VIEW PLANS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Menu;
