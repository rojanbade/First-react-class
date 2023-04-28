import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "john",
      contact: 9808675564,
      balance: 20000,
      inputNumber: 0,
      url: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
    };
  }

  handleLimit() {
    if (this.state.balance < 30000) {
      console.log(typeof this.state.inputNumber);
      console.log(typeof parseInt(this.state.inputNumber));
      this.setState({
        balance: this.state.balance + 1000,
        inputNumber: parseInt(this.state.inputNumber) + 1000,
        // url: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
      });
    }
  }

  handleInputChange(e) {
    // e.preventDefault();
    // console.log(e.target.value);
    this.setState({
      inputNumber: e.target.value,
    });
  }

  render() {
    return (
      <div>
        {/* <h1>This is Contact page</h1>
        <p>{this.state.name}</p>
        <img src={this.state.url} alt="car" /> */}
        <p>{this.state.contact}</p>
        <h1>{this.state.balance}</h1>
        <input
          type="number"
          value={this.state.inputNumber}
          onChange={(e) => this.handleInputChange(e)}
        />
        <h1>{this.state.inputNumber}</h1>

        <button onClick={() => this.handleLimit()}>Click me</button>
      </div>
    );
  }
}

export default Contact;
