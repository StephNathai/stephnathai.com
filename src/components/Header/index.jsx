import React from 'react';
import Name from './Name';
import Navigation from './Navigation';
import './header.scss';

const links = ['Home', 'Resume', 'Portfolio', 'Media'];

function Header() {
  return (
    <div className='header'>
      <Name name='Stephanie Nathai-Cueter'/>
      <hr />
      <Navigation links={links}/>
    </div>
  )
}

export default Header;
