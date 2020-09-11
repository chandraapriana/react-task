import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Tugas-15/Routes.js";
import Home from "./Tugas-15/Home.js";
// import "./App.css";
// import Tugas9 from "./Tugas-9/tugas9.js";
// import Tugas10 from "./Tugas-10/tugas10.js";
// import Tugas11 from "./Tugas-11/tugas11.js";
// import Clock from "./Tugas-11/Clock.js";
// import ReactDOM from "react-dom";
// import Timer from "./Tugas-11/tugas11.js";

// import TabelFruit from "./Tugas-12/TabelFruit.js";
// import DaftarBuah from "./Tugas-13/DaftarBuah.js";

import DaftarBuah from "./Tugas-14/DaftarBuah";
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
        <Router>
          <Home></Home>
          <Routes />
        </Router>
        {/* <Tugas9 />
        <Tugas10 />

        <Timer countdown={this.state.time} />
        {this.state.time > 0 && <Clock date={this.state.date} />} */}
      </>
    );
  }
}

export default App;
