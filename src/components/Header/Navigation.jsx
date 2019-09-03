import React from 'react';

function Navigation ({links}) {
  return(
    <div className='header-links-container'>
      {links.map((link) => (
        <li className='header-links'><a href='/'>{link}</a></li>
      ))}
    </div>
  )
}

export default Navigation;
