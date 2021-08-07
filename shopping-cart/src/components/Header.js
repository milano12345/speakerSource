import React from "react";
import logo from "../images/mustache.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationClass: "test",
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    if (this.state.animationClass === "test") {
      this.setState({
        animationClass: "test paused",
      });
    } else {
      this.setState({
        animationClass: "test",
      });
    }
  }
  render() {
    return (
      <div className="header">
        {/* <div className="imgcontainer">
          <img
            className="logo"
            src={require("../images/milano.jpg")}
            alt={"logo"}
          />
          <img
            className="logo"
            src={require("../images/milano.jpg")}
            alt={"logo"}
          />
          <img
            className="logo"
            src={require("../images/milano.jpg")}
            alt={"logo"}
          />
        </div> */}
        <h1>
          <div>The</div> <strong className="strong">Secret </strong>
          <div className="margin">Stache</div>
        </h1>
        <h6>
          Powered by: <strong className="strong2">Milano</strong>
        </h6>
        <div className={"logo-cnt"}>
          <img className={"logo"} src={logo} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;