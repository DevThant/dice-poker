import React, { Component } from "react";
import "./Die.css";
import { diceImgs } from "./Dice";

class Die extends Component {
  render() {
    return (
      <div>
        <h1>Die</h1>
        <img src={diceImgs[this.props.die]} alt={this.props.die} />
      </div>
    );
  }
}

export default Die;
