import React from "react";
import "./DateSelection.css";
import calc from "../../Utils/ColorCalc";

class DateSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pickedDate: ""};
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event) {
    this.setState({
      pickedDate: event.target.value,
    });
  }

  render() {
    return (
      <div className="DateSelection">
        <p>Insert your date of birth</p>
        <input
          type="date"
          className="date-picker"
          name="test"
          onChange={this.handleDateChange}
        ></input>
        <button
          className="confirm-button"
          onClick={() => this.props.color(calc(this.state.pickedDate))}
        >
          Confirm
        </button>
      </div>
    );
  }
}

export default DateSelection;
