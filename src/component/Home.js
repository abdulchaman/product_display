import React, { Component } from "react";
import JSON from "./db.json";
class App extends Component {
  constructor() {
    super();
    this.state = {
      productData: JSON,
    };
  }
  renderData() {
      console.log("inside renderdata")
  };
  render() {
    return (
      <>
        <h1>Hello world</h1>
        {this.renderData()}
      </>
    );
  }
}
export default App;
