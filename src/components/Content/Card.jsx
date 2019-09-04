import React from 'react';
import './card.scss';

function Title({title}) {
  const titleElement = title && <p className="title">{title}</p>;
  return (
    titleElement
  );
}

// function Compilation({pageType}) {
//   return (
//
//   );
// }
//
// function DescriptionHeader({pageType}) {
//   return (
//
//   );
// }

function Card({cardContent}) {
  return (
    <button className={cardContent.className}>
      <Title title={cardContent.title} />
      <p>{cardContent.description}</p>
      <img src={require(`../../assets/${cardContent.imgSrc}`)} alt={cardContent.alt}/>
    </button>
  );
}

export default Card;
