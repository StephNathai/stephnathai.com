import React from 'react';
import Card from './Card';

const portfolioObj = [
  {
    description: "An interactive subway map that shows you where the NYC 1,2,3,4,5,6, and shuttle lines currently are in their route sequence using the MTA API to pull real-time data - Currently featured in the MTA App Gallery",
    imgSrc: "trainTrack.png",
    alt: "trainTrack",
    href: "http://trainTracknyc.com",
    className: "card",
    key: "trainTrack",
    title: "trainTrack",
    compilation: "Node.js, Socket.io, Express, JavaScript, MTA API, and Google Maps API",
    descriptionHeader: true
  },
];

function Portfolio() {
  return(
    <div className="portfolio-card-container">
      {
        portfolioObj.map((item) => (
          <Card cardContent={item}  key={item.key}/>
        ))
      }
    </div>
  )
}

export default Portfolio;
