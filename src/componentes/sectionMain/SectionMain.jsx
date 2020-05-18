import React from 'react';
import Hr from '../basicComponents/Hr';
import ImageMain from './ImageMain';

import Image from '../../imagens/image-intro-desktop.jpg';
import './sectionMain.css';

const SectionMain = () => {
  return (
    <section className='layout-main'>
      <div className='container'>
        <div className='main-section'>
          <Hr valu='s10'></Hr>
          <h1 className='title-main'>
            Humanizing <br /> your insurance.
          </h1>
          <p className='content-main'>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a href='/' className='step-6'>
            View Plans
          </a>
        </div>
        <ImageMain image={Image}></ImageMain>
      </div>
    </section>
  );
};
export default SectionMain;
