import React from 'react';

const IconFooter = (props) => {
  return (
    <div className='col s1 footer-icon-margin'>
      <img src={props.value} alt={props.alt}></img>
    </div>
  );
};

export default IconFooter;
