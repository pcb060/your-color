import React from "react";
import "./ColorResult.css";


class ColorResult extends React.Component {
  render() {
    return (
        <div className="ColorResult">
          <p>
            Your color is{" "}
            <span id="color-result">
              {this.props.displayColor.toUpperCase()}
            </span>
          </p>
        </div>
    );
  }
}

export default ColorResult;
