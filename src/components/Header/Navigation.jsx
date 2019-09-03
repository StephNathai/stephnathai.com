import React from 'react';

function Navigation ({links, updateContent}) {
  return(
    <div className='header-links-container'>
      {links.map((link) => (
        <button className='header-links' onClick={() => updateContent(link.toLowerCase())}>{link}</button>
      ))}
    </div>
  )
}

export default Navigation;
