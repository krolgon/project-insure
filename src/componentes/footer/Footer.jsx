import React from 'react';
import Logo from '../../imagens/logo.svg';
import IconFooter from './IconFooter';
import FooterLinks from './FooterLinks';

import Facebook from '../../imagens/icon-facebook.svg';
import Twitter from '../../imagens/icon-twitter.svg';
import Pintrest from '../../imagens/icon-pinterest.svg';
import Instagram from '../../imagens/icon-instagram.svg';

import './footer.css';

const Rodape = () => {
  return (
    <React.Fragment>
      <section className='bg-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col s4 offset-s1'>
              <img src={Logo}></img>
            </div>
            <div className='col s4 offset-s3'>
              <IconFooter value={Facebook}></IconFooter>
              <IconFooter value={Twitter}></IconFooter>
              <IconFooter value={Pintrest}></IconFooter>
              <IconFooter value={Instagram}></IconFooter>
            </div>
          </div>
          <hr />
          <div class='row'>
            <FooterLinks
              title='OUR COMPANY'
              link1='HOW WE WORK'
              link2='WHY INSURE'
              link3='VIEW PLANS'
              link4='REVIEWS'
            ></FooterLinks>
            <FooterLinks
              title='HELP ME'
              link1='FAQ'
              link2='TERMS OF USE'
              link3='PRIVACY POLICY'
              link4='COOKIES'
            ></FooterLinks>
            <FooterLinks
              title='CONTACT'
              link1='SALES'
              link2='SUPPORT'
              link3='LIVE CHAT'
            ></FooterLinks>
            <FooterLinks
              title='OTHERS'
              link1='CAREERS'
              link2='PRESS'
              link3='LICENSES'
            ></FooterLinks>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Rodape;
