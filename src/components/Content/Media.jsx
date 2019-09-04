import React from 'react';
import Card from './Card';
import './media.scss';

const mediaObj = [
  {
    description: "trainTrack is currently featured on the NYC MTA's website in their App Gallery under the Web/Mobile Category.",
    imgSrc: "trainTrack.png",
    alt: "trainTrack",
    href: "http://web.mta.info/apps",
    className: "card",
    key: "trainTrack",
    descriptionHeader: false
  },
  {
    description: "As mentioned in this article, GroupAway won the IBM Challenge for best Bluemix Creation at the Tnooz Hackathon.",
    imgSrc: "groupaway.png",
    alt: "Group Away",
    href: "http://www.tnooz.com/article/small-teams-step-up-and-hack-new-york-city-travel",
    className: "card",
    key: "groupAway",
    descriptionHeader: false
  }
];

function Media() {
  return(
    <div className="media-card-container">
      {
        mediaObj.map((item) => (
          <Card cardContent={item} key={item.key}/>
        ))
      }
    </div>
  )
}

export default Media;
