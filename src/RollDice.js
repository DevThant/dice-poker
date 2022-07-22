import React, { Component } from "react";
import Die from "./Die";
import { dice } from "./Dice";

class RollDice extends Component {
  render() {
    return (
      <div>
        <h1>RollDice</h1>
        <div>
          <Die die="d1Red" />
          <Die die="d3Blue" />
        </div>
      </div>
    );
  }
}

export default RollDice;
