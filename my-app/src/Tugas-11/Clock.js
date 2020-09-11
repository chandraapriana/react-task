import React from "react";

import ReactDOM from "react-dom";

import Timer from "./tugas11";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 100,
      date: new Date(),
    };
  }

  componentDidMount() {
    // if (this.props.start !== undefined) {
    //   this.setState({ time: this.props.start });
    // }

    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 1,
        date: new Date(),
      });
    }
  }
  render() {
    console.log(this.props);
    console.log(this.state.date);
    return (
      <div>
        <Timer countdown={this.state.time} />
        {this.state.time > 0 && (
          <h1 style={{}}>
            sekarang jam :
            {this.state.date && this.state.date.toLocaleTimeString()}.
          </h1>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
export default Clock;
