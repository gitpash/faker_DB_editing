import React from "react";
import PropTypes from "prop-types";

class CreateElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crafting: false,
      lastName: "",
      firstName: "",
      department: ""
    };
  }
  handleClick = () => {
    this.setState({ crafting: true });
  };
  handleSubmit = e => {
    this.props.onNameChange(this.state);
    this.setState({
      crafting: false,
      lastName: "",
      firstName: "",
      department: ""
    });
    e.preventDefault();
  };
  handleLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };
  handleFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };
  handleDepartmentChange = e => {
    this.setState({ department: e.target.value });
  };
  render() {
    const { crafting, lastName, firstName, department } = this.state;
    return (
      <div>
        {crafting
          ? <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  department:
                  <input
                    type="text"
                    value={department}
                    onChange={this.handleDepartmentChange}
                  />
                </label>
                <label>
                  firstName:
                  <input
                    type="text"
                    value={firstName}
                    onChange={this.handleFirstNameChange}
                  />
                </label>
                <label>
                  lastName:
                  <input
                    type="text"
                    value={lastName}
                    onChange={this.handleLastNameChange}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
          : <div className="btn-create">
              <p>click on button to edit new list item</p>
              <button onClick={this.handleClick}>create</button>
            </div>}
      </div>
    );
  }
}
CreateElement.propTypes = {
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  department: PropTypes.string
}
export default CreateElement;
