import React from 'react';
import GuessNumberGame from '../games/GuessNumberGame/GuessNumberGame.jsx'; 

const GuessNumberPage = () => {
  // NOTE: This page ensures the game is rendered correctly within the hub's structure.
  return (
    <div className="game-page-wrapper">
      <GuessNumberGame />
    </div>
  );
};

export default GuessNumberPage;