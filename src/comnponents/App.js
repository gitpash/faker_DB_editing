import React from "react";
import MainContent from "../comnponents/MainContent";
import CreateElement from "../comnponents/CreateElenent";
import css from "../styles/style.css"
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [ ]
    };
  }
  createDisplayedData = data => {
    const arr = Array.from(data);
    this.setState({ data: arr });
  };
  fetchFakeData = method => {
    fetch("http://localhost:3004/fakeData", {
      headers: { "content-type": "application/json" },
      method
    })
      .then(response => response.json())
      .then(data => this.createDisplayedData(data));
  };
  componentDidMount() {
    this.fetchFakeData("GET");
  }
  handleNameChange = form => {
    const { data } = this.state;
    const id = data.length;
    const newData = data.concat({
      department: form.department,
      firsName: form.firstName,
      lastName: form.lastName,
      departmentId: id
    });
    console.log(newData);
    this.setState({ data: newData });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="wrapper">
        <MainContent data={data} />
        <CreateElement {...data} onNameChange={this.handleNameChange} />
      </div>
    );
  }
}
App.propTypes = {
  data: PropTypes.array
}
export default App;
