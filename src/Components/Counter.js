import React from 'react';


class Counter extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        num: 0
      }
      this.incrementCounter = this.incrementCounter.bind(this)
    }
  
    incrementCounter(e){
      this.setState({
        num: this.state.num+1
      })
    }
  
    render(){
      return(
        <fieldset>
          <button onClick={this.incrementCounter}>Increase</button>
          <p>{this.state.num}</p>
        </fieldset>
      );   
    }
}

export default Counter;