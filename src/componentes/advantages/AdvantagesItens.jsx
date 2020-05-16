import React from 'react';

const AdvantagesItens = (props) => {
  return (
    <React.Fragment>
      <div className='col s4'>
        <img src={props.image}></img>
        <h4 className='title-advantages'>{props.title}</h4>
        <p className='content-advantages'>{props.content}</p>
      </div>
    </React.Fragment>
  );
};
export default AdvantagesItens;
