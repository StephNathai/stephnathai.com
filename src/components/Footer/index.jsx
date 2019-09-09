import React from 'react';
import Navigation from './Navigation';
import './footer.scss';

const links = {
  'linkedin': 'https://linkedin.com/in/stephnathai',
  'github': 'https://github.com/StephNathai',
  'email': 'mailto:contact@stephnathai.com'
};

function Footer() {
  return(
    <div className='footer'>
      <Navigation links={links}/>
    </div>
  );
}

export default Footer;
