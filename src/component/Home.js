import React, { Component } from "react";
import JSON from "./db.json";
import Header from './Header';
import Product from "./productDisplay";
class App extends Component {
  constructor() {
    super();
    this.state = {
      productData: JSON,
      filteredData:JSON
    };
  }
  filterData=(keyword)=>{

let output = this.state.productData.filter((data)=>{
  return (data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1)
})
    this.setState({filteredData:output})
  }
  render() {
    return (
      <>
        <Header userInput={(data)=>{this.filterData(data)}}></Header>
        <Product renderData={this.state.filteredData}></Product>
      </>
    );
  }
}
export default App;
