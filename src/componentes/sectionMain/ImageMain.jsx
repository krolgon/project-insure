import React from 'react';

const ImageMain = (props) => {
  return (
    <div className='main-img'>
      <img src={props.image} />
    </div>
  );
};

export default ImageMain;
