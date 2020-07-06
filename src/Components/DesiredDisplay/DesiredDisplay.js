import React from "react";
import "./DesiredDisplay.css";
import DateSelection from "../DateSelection/DateSelection";
import ColorResult from "../ColorResult/ColorResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo} from "@fortawesome/free-solid-svg-icons";

class DesiredDisplay extends React.Component {
  render() {
    if (this.props.isHidden) {
      return (
      <div>
        <ColorResult displayColor={this.props.displayColor} />
        <FontAwesomeIcon onClick={this.props.reset} id="reset-icon" icon={faRedo}></FontAwesomeIcon>
      </div>
      );
    }
    return <DateSelection color={this.props.color} />;
  }
}

export default DesiredDisplay;
