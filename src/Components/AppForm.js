import React from "react";
import Board from './Board';

function ResultComponent(props){
  let text = props.title + " " + props.gameNum + " " + props.result
  text += "\n"
  if(props.link !== null || props.link === ""){
    text += props.link
  }
  text += "\n"
  text += props.board
  const resultStyle = {
    height:"300px",
    width:"50%"
  }
  return (
    <div>
      <textarea 
        style={resultStyle}
        value={text}
        readOnly={true}
      />
      <br/>
      <button onClick={()=>navigator.clipboard.writeText(text)}>Copy to clipboard</button>
    </div>
  );
}

class AppForm extends React.Component{
    constructor(props){
      super(props)

      // Create board stuff
      const boardDimensions = [5,6]
      let boardVals = Array.from(Array(parseInt(boardDimensions[1])), () => new Array(parseInt(boardDimensions[0])))
      for (let i = 0; i < boardDimensions[1]; i++) {
        for (let j = 0; j < boardDimensions[0]; j++) {
          boardVals[i][j] = "⬛"
        }
      }
      this.state = {
        boardValues: boardVals,
        boardDimensions: boardDimensions,
        title:"Wordle",
        gameNum:1,
        resultNum:1,
        link:null
      }

      // function bind
      this.handleBoardClick = this.handleBoardClick.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.createResult = this.createResult.bind(this)
    }

    // Clicking on tiles in board
    handleBoardClick(e,x,y){
      e.preventDefault()
      const loopEmojis = ["⬛","🟨","🟩"]
      let old = this.state.boardValues
      //cycle through array
      old[x][y] = loopEmojis[(loopEmojis.indexOf(old[x][y])+1)%loopEmojis.length]
      this.setState({
        values: old
      })
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit(event){
      event.preventDefault()
    }

    createResult(){
      let rn = parseInt(this.state.resultNum)
      const board = this.state.boardValues.map((arr)=>arr.join("")).slice(0,rn).join("\n")
      rn = rn === this.state.boardDimensions[1] ? "x" : rn 
      return (
        <ResultComponent
          title={this.state.title}
          gameNum = {this.state.gameNum}
          result = {rn+"/"+this.state.boardDimensions[1]}
          link = {this.state.link}
          board = {board}
          />
      );
    }

    render(){

      return(
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input wordle name: 
            <input 
              name = "title"
              type="text"
              onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Input game number: 
            <input 
              name = "gameNum"
              type="number"
              min={1}
              onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Input how fast you finished: 
            <input 
              name = "resultNum"
              type="number"
              max={this.state.boardDimensions[1]}
              min={0}
              onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            (optional) link: 
            <input 
              name = "link"
              type="text"
              onChange={this.handleInputChange}/>
          </label>
          <br/>
          <Board width ="5" height="6" values={this.state.boardValues} onClick={this.handleBoardClick}/>
        </form>
        {this.createResult()}
        </div>
      );   
    }
}

export default AppForm;