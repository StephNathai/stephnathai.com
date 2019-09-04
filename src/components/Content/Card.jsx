import React from 'react';
import './card.scss';

function Card({cardContent}) {
  return(
    <button className={cardContent.className}>
      <p>{cardContent.description}</p>
      <img src={require(`../../assets/${cardContent.imgSrc}`)} alt={cardContent.alt}/>
    </button>
  );
}

export default Card;
