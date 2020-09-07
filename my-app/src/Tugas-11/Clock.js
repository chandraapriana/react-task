import React from "react";

import ReactDOM from "react-dom";

class Clock extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 style={{ float: "left" }}>
          sekarang jam :
          {this.props.date && this.props.date.toLocaleTimeString()}.
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
export default Clock;
