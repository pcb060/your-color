import React from "react";
import "./App.css";
import DesiredDisplay from "../DesiredDisplay/DesiredDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calcColor: "", displayResult: false };
    this.reset = this.reset.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.twitterColorDark = "#15202b";
    this.twitterColorLight = "#ffffff";
  }

  reset() {
    this.setState({
      calcColor: "",
      displayResult: false,
    });
  }

  updateColor(value) {
    // check if all values are valid
    if (
      Number(value.substring(1, 3)) < 0 ||
      Number(value.substring(3, 5)) < 0 ||
      Number(value.substring(5, 7)) < 0 ||
      value.length !== 7
    ) {
      alert("Please insert a valid date");
    } else {
      this.setState({
        calcColor: value,
        displayResult: true,
      });
    }
  }

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor:
            this.state.calcColor !== ""
              ? this.state.calcColor
              : this.twitterColorDark,
        }}
      >
        <DesiredDisplay
          isHidden={this.state.displayResult}
          reset={this.reset}
          color={this.updateColor}
          displayColor={this.state.calcColor}
        />
      </div>
    );
  }
}

export default App;
