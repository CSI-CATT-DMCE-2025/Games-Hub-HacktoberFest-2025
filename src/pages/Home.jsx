import React from 'react'
import GameCard from '../components/GameCard'

export default function Home() {
  return (
    <div>
      <header className="hero">
        <h1>Welcome to Fun Games Hub 🎉</h1>
        <p>A hub of fun games made for Hacktoberfest contributions!</p>
      </header>

      <section className="games-grid">
        <GameCard title="Tic Tac Toe" desc="Classic 3x3 game" to="/tictactoe" />
        <GameCard title="Memory Match" desc="Flip and match pairs" to="/memory" />
        <GameCard title="Snake" desc="Classic snake game" to="/snake" />
        
        <GameCard 
          title="Guess The Number"
          desc="Can you guess the number between 1 and 10 in the fewest attempts?"
          to="/guess-number" 
        /> 
      </section>
    </div>
  )
}