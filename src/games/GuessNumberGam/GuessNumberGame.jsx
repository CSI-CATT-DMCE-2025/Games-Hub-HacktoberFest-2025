import React, { useState } from 'react';

const GuessNumberGame = () => {
  // --- Game State ---
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 10!');
  const [attempts, setAttempts] = useState(0);

  // --- Functions ---
  const handleGuess = () => {
    const num = parseInt(guess);

    if (isNaN(num) || num < 1 || num > 10) {
      setMessage('Please enter a valid number between 1 and 10.');
      return;
    }

    setAttempts(attempts + 1);

    if (num === targetNumber) {
      setMessage(`🎉 Congratulations! You guessed it in ${attempts + 1} attempts!`);
    } else if (num < targetNumber) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }

    setGuess('');
  };

  const handleRestart = () => {
    setTargetNumber(Math.floor(Math.random() * 10) + 1);
    setGuess('');
    setMessage('Guess a number between 1 and 10!');
    setAttempts(0);
  };

  // --- Render ---
  return (
    <div style={{ padding: '20px', textAlign: 'center', margin: '20px auto', maxWidth: '400px', border: '2px solid #007bff', borderRadius: '10px' }}>
      <h1>Guess the Number</h1>
      <p>{message}</p>

      <input
        type="number"
        min="1"
        max="10"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleGuess();
        }}
        style={{ margin: '10px', padding: '10px', width: '80px' }}
        disabled={message.includes('Congratulations')}
      />

      <button 
        onClick={handleGuess} 
        disabled={message.includes('Congratulations')}
        style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Submit Guess
      </button>

      <p>Attempts: **{attempts}**</p>

      {message.includes('Congratulations') && (
        <button 
          onClick={handleRestart} 
          style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default GuessNumberGame;