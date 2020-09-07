import React, { Component } from "react";

class Timer extends Component {
  render() {
    return (
      <>
        <h1 style={{ float: "right" }}>
          hitung mundur: {this.props.countdown}
        </h1>
      </>
    );
  }
}

export default Timer;
