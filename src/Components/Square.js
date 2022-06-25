import React from "react";

class Square extends React.Component{
    constructor(props){
      super(props)
      this.state={
        text:"test"
      }
    }

    render(){
      const buttonStyle = {
        border: "0px solid black",
        backgroundColor: "transparent",
        fontSize:"200%"
      }
      return(
          <button onClick={this.props.onClick}
          style={buttonStyle}>
            {this.props.value}
          </button>
      );   
    }
}

export default Square;