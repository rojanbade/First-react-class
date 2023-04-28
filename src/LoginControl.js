import React from "react";
import { LoginButton, LogoutButton } from "./LoginButton";
import Greeting from "./Greeting";
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn);
    // let button;

    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {/* {button} */}

        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}

        <h2>The user is {isLoggedIn ? "currently" : "not"} logged in.</h2>
      </div>
    );
  }
}
export default LoginControl;
