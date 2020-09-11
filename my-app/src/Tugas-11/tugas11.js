import React, { Component } from "react";

class Timer extends Component {
  render() {
    return (
      <>
        <h1 style={{}}>hitung mundur : {this.props.countdown}</h1>
      </>
    );
  }
}

export default Timer;
