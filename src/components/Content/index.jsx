import React from 'react';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Media from './Media';

function Content({page}) {
  let pageContent;

  switch(page) {
    case 'home':
    default:
      pageContent = <Home />;
      break;

    case 'resume':
      pageContent = <Resume />;
      break;

    case 'portfolio':
      pageContent = <Portfolio />;
      break;

    case 'media':
      pageContent = <Media />;
      break;
  }

  return(
    <div className="content">
      {pageContent}
    </div>
  );
}

export default Content;
