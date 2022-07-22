import React, { Component } from "react";
import Die from "./Die";
import { roll, animateDice } from "./helper";
import "./RollDice.css";

class RollDice extends Component {
  state = {
    round: 1,
    player1: {
      name: "Player 1",
      color: "Red",
      baseScore: 0,
      score: 0,
      dice: [],
      turn: true,
    },
    player2: {
      name: "Player 2",
      color: "Blue",
      baseScore: 0,
      score: 0,
      dice: [],
      turn: false,
    },
  };
  player1Roll = () => {
    const { baseScore } = this.state.player1;
    const dice1 = roll();
    const dice2 = roll();
    this.setState({
      player1: {
        ...this.state.player1,
        dice: [dice1, dice2],
        score: dice1 === dice2 ? Math.pow(dice1, 2) : dice1 + dice2,
        baseScore:
          dice1 === dice2
            ? baseScore + Math.pow(dice1, 2)
            : baseScore + dice1 + dice2,
        turn: false,
      },
      player2: {
        ...this.state.player2,
        turn: true,
      },
    });
    // animate the dice roll
    animateDice(this.state.player1.color);
  };
  player2Roll = () => {
    const { baseScore } = this.state.player2;
    const dice1 = roll();
    const dice2 = roll();
    this.setState({
      player2: {
        ...this.state.player2,
        dice: [dice1, dice2],
        score: dice1 === dice2 ? Math.pow(dice1, 2) : dice1 + dice2,
        baseScore:
          dice1 === dice2
            ? baseScore + Math.pow(dice1, 2)
            : baseScore + dice1 + dice2,
        turn: false,
      },
      player1: {
        ...this.state.player1,
        turn: true,
      },
      round: this.state.round + 1,
    });
    // animate the dice roll
    animateDice(this.state.player2.color);
  };
  resetGame = () => {
    this.setState({
      round: 1,
      player1: {
        ...this.state.player1,
        score: 0,
        baseScore: 0,
        dice: [],
        turn: true,
      },
      player2: {
        ...this.state.player2,
        score: 0,
        baseScore: 0,
        dice: [],
        turn: false,
      },
    });
  };
  render() {
    const { player1, player2, round } = this.state;
    return (
      <div className="RollDice">
        <h1>Roll the Dice</h1>
        {round <= 5 && <p>Round : {round}</p>}
        {player1.turn && round <= 5 ? (
          <button onClick={this.player1Roll}> Player 1 Roll</button>
        ) : (
          <button disabled> Player 1 Roll</button>
        )}
        {player2.turn && round <= 5 ? (
          <button onClick={this.player2Roll}> Player 2 Roll</button>
        ) : (
          <button disabled> Player 2 Roll</button>
        )}

        <div className="RollDice-row">
          <div className="RollDice-col">
            <Die player={player1} />
          </div>
          <div className="RollDice-col">
            <Die player={player2} />
          </div>
        </div>
        {round >= 6 && <button onClick={this.resetGame}>Reset</button>}
      </div>
    );
  }
}

export default RollDice;
