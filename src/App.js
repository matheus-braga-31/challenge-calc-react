import React from 'react'
import './App.css'
export default class Calc extends React.Component{

  state = {
    result: 0,
    num1: null,
    num2: null
  }

  handleChange = (e) => {
    this.setState({
      num1: Number(e.target.value)
    })
  }

  handleChange2 = (e) => {
    this.setState({
      num2: Number(e.target.value)
    })
  }

  minus = () => {
    let {num1, num2} = this.state
    if(num1 && num2 !== ""){
    this.setState({
      result: (num1) - (num2)
    })
  }
}
  multiply = () => {
    let {num1, num2} =this.state
    if(num1 && num2 !== ""){
      this.setState({
        result: num1 * num2
      })
    }
  }
  divide = () => {
    let {num1, num2} = this.state
    if(num1 && num2 !== ""){
    this.setState({
      result: (num1) / (num2)
    })
  }
  }
  add = () => {
    let {num1, num2} = this.state
    if(num1 && num2 !== ""){
    this.setState({
      result: (num1) + (num2)
    })
  }
  }

  clear = () => {
    let {num1, num2} = this.state
    if (num1, num2){
    this.setState({
      result: null,
      num1: 0,
      num2: 0
    })
  }else{
    this.setState({
      result: "Nenhum valor foi digitado"
    })
  }
  }

  render(){
    return(
      <div className='container'>
        <div className="bodyCalc">
      <h1>React Calc App</h1>
        <div className='numberBox'>
        <input 
        value={this.state.num1} onChange={this.handleChange} type="number"/>
        <div className='calc-button'>
        <button onClick={this.minus}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.add}>+</button>
        </div>
        <input value={this.state.num2} onChange={this.handleChange2} type="number"/>
        <button className="clearButton" onClick={this.clear}>clear</button>
        </div>
      <h2>{this.state.result}</h2>
      </div>
    </div>
    )
  }
}