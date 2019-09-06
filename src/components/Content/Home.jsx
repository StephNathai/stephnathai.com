import React from 'react';
import './home.scss';

function LeftContent() {
  return(
    <div className="left-content">
      <h3>Hi, I'm Steph</h3>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
    </div>
  );
}

function RightContent() {
  return(
    <div className="right-content">
      <img className="home-image" src={require('../../assets/main.jpg')} alt='Steph' />
    </div>
  );
}

function Home() {
  return(
    <div className="container">
      <LeftContent />
      <RightContent />
    </div>
  );
}

export default Home;
