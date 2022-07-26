import React, { Component } from "react";
import "./Die.css";
import { diceImgs } from "./Dice";
import dicesLogo from "./img/dicesLogo.png";

class Die extends Component {
  render() {
    const {player, isWinner, round} = this.props;
    const { dice, color, name, score, baseScore } = player;
    const die1 = `d${dice[0]}${color}`;
    const die2 = `d${dice[1]}${color}`;
    return (
      <div className="Die">
        <h1>{name} {round>5 && isWinner? <span className="Die-winner">(Winner!)</span>:null}</h1>

        {score === 0 ? (
          <img className="Die-roll" src={dicesLogo} alt="Two Dice" />
        ) : (
          <div className={`Die-${color}`}>
            <img src={diceImgs[die1]} alt="dice" />
            <img src={diceImgs[die2]} alt="dice" />
          </div>
        )}

        <p>
          Accumulated Score: {baseScore} (+{score})
        </p>
      </div>
    );
  }
}

export default Die;
