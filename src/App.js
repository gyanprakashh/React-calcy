import React, { Component } from 'react'
import './App.css';
import {Button} from './Component/Button.js';
import {ClearButton} from './Component/ClearButton'
import{Input} from './Component/Input'; 
import * as math from "mathjs";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input:""
    }
    }
    addToInput=(val)=>{
      console.log("addatoinput" + val)
      this.setState({
        input:this.state.input+val
      },()=>{
        console.log(this.state.input);
      })
    }
    addToEqual=()=>{
      try{
      this.setState({ input: math.evaluate(this.state.input) });
      }catch(err){
        this.setState({input:"syntax err"})
      }
    }
  render(){
    return (
      <div className="app">
        <div className="calc-wrapper">
        <Input>{this.state.input}</Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToEqual}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
          <Button handleClick={this.addToInput}>(</Button>
          <Button handleClick={this.addToInput}>)</Button>
            <ClearButton handleClear={()=>{this.setState({input:""})}}>clear </ClearButton>
          </div>
        </div>
      </div>
    );
  }
 
}

export default App;


