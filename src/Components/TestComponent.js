import React from "react";

class TestComponent extends React.Component{
    constructor(props){
      super(props)
      this.state={
        text:"test"
      }
    }

    render(){

      return(
          <button>
            {this.state.text}
          </button>
      );   
    }
}

export default TestComponent;