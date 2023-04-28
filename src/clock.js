import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // date: new Date(),
      name: "john",
      address: "banepa",
      number: 10,
    };
  }

  // componentDidMount() {
  //   this.timerID = setInterval(() => this.tick(), 1000);
  //   // this.handleClick();
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  // tick() {
  //   this.setState({
  //     date: new Date(),
  //   });
  // }

  render() {
    return (
      <div>
        <h1>
          Hello,{this.state.name}
          {this.state.number}
        </h1>
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
        <button
          onClick={() =>
            this.setState({ name: "marry", number: this.state.number + 1 })
          }
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Clock;
