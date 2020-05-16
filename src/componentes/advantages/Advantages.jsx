import React from 'react';
import AdvantagesItens from './AdvantagesItens';

import Snappy from '../../imagens/icon-snappy-process.svg';
import Price from '../../imagens/icon-affordable-prices.svg';
import People from '../../imagens/icon-people-first.svg';

import './advantages.css';

const Advantages = (props) => {
  return (
    <div className='container layout-advantages'>
      <div class='row'>
        <hr className='col s3' />
      </div>
      <h2 className='head-advantages'>We're different</h2>
      <div class='row'>
        <AdvantagesItens
          image={Snappy}
          title='Snappy Process'
          content="Our application can be completed in minutes, not ours. Don't get sucks fillling in tedious forms."
        ></AdvantagesItens>
        <AdvantagesItens
          image={Price}
          title='Affordable Prices'
          content="We don't want you worring about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
        ></AdvantagesItens>
        <AdvantagesItens
          image={People}
          title='People First'
          content="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
        ></AdvantagesItens>
      </div>
    </div>
  );
};
export default Advantages;
