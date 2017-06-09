import React from "react";

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { item: null, list: [], key: null };
  }
  // create array of objects from props
  componentWillReceiveProps(nextProps) {
    // const arr = Object.keys(nextProps).map(key => nextProps[key]);

    this.setState({ list: nextProps.data });
    // console.log(nextProps.data)
  }

  // show item to delete
  handleClick = (item, key) => {
    // console.log(this.props)
    this.setState({ item, key });
  };
  // delete item from list by key
  handleDismiss = () => {
    const { list, key } = this.state;
    list.splice(key, 1);
    this.setState({ list, item: null });
  };

  render() {
    const { item, list } = this.state;
    return (
      <div className="fakeDB">
        <hr />
        <div>
          <h3>Data from fakeDB</h3>
          <p>click on item to display</p>
          {list.map((item, index) =>
            <pre
              className="listItem"
              key={item.departmentId}
              onClick={() => this.handleClick(item, index)}
            >
              {JSON.stringify(item, null, "  ")}
            </pre>
          )}
        </div>
        <hr />
        <div>
          {item
            ? <div className="removeList">
                <p><span className="colorText">department:</span> {item.department}</p>
                <p><span className="colorText">firstName:</span> {item.firstName}</p>
                <p><span className="colorText">lastName:</span> {item.lastName}</p>
                <p>hit the button to remove item from list</p>
                <button type="button" onClick={() => this.handleDismiss()}>
                  Remove
                </button>
              </div>
            : null}
        </div>
      </div>
    );
  }
}
export default MainContent;
