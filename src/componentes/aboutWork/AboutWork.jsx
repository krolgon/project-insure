import React from 'react';

import './aboutWork.css';

const AboutWork = () => {
  return (
    <div className='container layout-aboutWork'>
      <div className='row'>
        <div className='col s8'>
          <h2 className='title-aboutWork'>
            Find out mode
            <br />
            about how we work
          </h2>
        </div>
        <div className='col s4 button-aboutWork center-align'>
          <a className=' waves-effect waves-light btn-large' href='/'>
            HOW WE WORK
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutWork;
