import React from 'react';
import AdvantagesItens from './AdvantagesItens';
import Hr from '../basicComponents/Hr';

import Snappy from '../../imagens/icon-snappy-process.svg';
import Price from '../../imagens/icon-affordable-prices.svg';
import People from '../../imagens/icon-people-first.svg';

import './advantages.css';

const Advantages = (props) => {
  return (
    <React.Fragment>
      <div className='container layout-advantages'>
        <Hr></Hr>
        <h2 className='head-advantages'>We're different</h2>
        <div className='row'>
          <AdvantagesItens
            image={Snappy}
            alt='Snappy Image'
            title='Snappy Process'
            content="Our application can be completed in minutes, not ours. Don't get sucks fillling in tedious forms."
          ></AdvantagesItens>
          <AdvantagesItens
            image={Price}
            alt='Price Image'
            title='Affordable Prices'
            content="We don't want you worring about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
          ></AdvantagesItens>
          <AdvantagesItens
            image={People}
            alt='People Image'
            title='People First'
            content="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
          ></AdvantagesItens>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Advantages;
