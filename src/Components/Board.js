import React from "react";
import Square from "./Square";

class Board extends React.Component{
    constructor(props){
      super(props)

      this.state = {
        values: props.values
      }
    }




    // renderTile(x,y){
    //   // const val = this.state.values[x][y]
    //   // //console.log(val)
    //   // return(
    //   //   <Tile key={y} onClick={this.handleClick} value={val}/>
    //   // )
    //   return (
    //       <Tile key={y} val={this.state.values[x][y]}/>
    //   );
    // }

    render(){
      let rows = [];
      rows = this.state.values.map((arr,x)=>{
        return (
          <div key= {x}>
            {arr.map((el,y)=>{
              return (
                  <Square key = {y} value={this.state.values[x][y]} onClick={(e)=>this.props.onClick(e,x,y)}/>
              );
              })
            }
            <br/>
          </div>
        );
      })
      return(
        <div>
          {rows}
        </div>
      );   
    }
}

export default Board;