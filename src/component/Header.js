import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"Product Display",
            keyword:"User Text Here"
        }
    }
    handleChange = (event) =>{
        this.setState({keyword:event.target.value?event.target.value:"User Text Here"});
        this.props.userInput(event.target.value)
    }
    render(){
        return(
            <>
                <h1>{this.state.title}</h1>
                <input onChange={this.handleChange}></input>
                <p>{this.state.keyword}</p>
            </>
        )
    }
}
export default Header;