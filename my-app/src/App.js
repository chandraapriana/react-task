import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tugas9 from "./Tugas-9/tugas9.js";
import Tugas10 from "./Tugas-10/tugas10.js";
import Tugas11 from "./Tugas-11/tugas11.js";
import Clock from "./Tugas-11/Clock.js";
import ReactDOM from "react-dom";
import Timer from "./Tugas-11/tugas11.js";
import Counter from "./Test/Counter.js";
import TabelFruit from "./Tugas-12/TabelFruit.js";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     time: 100,
  //     date: new Date(),
  //   };
  // }

  // componentDidMount() {
  //   // if (this.props.start !== undefined) {
  //   //   this.setState({ time: this.props.start });
  //   // }

  //   this.timerID = setInterval(() => this.tick(), 1000);
  // }

  // tick() {
  //   if (this.state.time > 0) {
  //     this.setState({
  //       time: this.state.time - 1,
  //       date: new Date(),
  //     });
  //   }
  // }

  render() {
    return (
      <>
        {/* <Tugas9 />
        <Tugas10 />

        <Timer countdown={this.state.time} />
        {this.state.time > 0 && <Clock date={this.state.date} />} */}
        <TabelFruit />
      </>
    );
  }
}

export default App;
