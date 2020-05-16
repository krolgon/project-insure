import React from 'react';

const FooterLinks = (props) => {
  return (
    <React.Fragment>
      <div className='col s3 center'>
        <h3 className='title-footer'>{props.title}</h3>
        <ul>
          <li>
            <a className='link-footer' href='/'>
              {props.link1}
            </a>
          </li>
          <li>
            <a className='link-footer' href='/'>
              {props.link2}
            </a>
          </li>
          <li>
            <a className='link-footer' href='/'>
              {props.link3}
            </a>
          </li>
          <li>
            <a className='link-footer' href='/'>
              {props.link4}
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default FooterLinks;
