import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }`

  const Container = styled.div`
  width:100%;
  height:100vh;
  font-family: 'Anton', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EF709D;
  font-size: 1.5vw;`

  const BodyCalc = styled.div`
  width: 40vw;
  height: 60vh;
  background-color: #70E4EF;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 20%;
  box-shadow: inset 1em 1em #3772FF;`

  const NumberBox = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;`

  const FactorsInput = styled.input`
  border:none;
  width: 15vw;
  height: 4vh;
  border-radius:20px;
  background-color: rgb(212, 234, 245);`

  const CalcButton = styled.div`
  width: 20vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Anton', sans-serif;`

  const OperatioButton = styled.button`
    width: 3vw;
  height: 5vh;
  border-radius: 20px;
  border-style:groove;
  background-color: #EF709D;
  border: none;
  font-size: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(212, 234, 245);`

  const ClearButton = styled.button`
  border: none;
  border-radius: 20%;
  color: #EF709D;
  background-color: rgb(212, 234, 245);

  &:hover{
    cursor: pointer;
    width: 3.5vw;
    height: 5.5vh;
    transition: all .1s;
  }`

  const Display = styled.h2`
  font-size: 2vw;`

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
      <Container>
        <BodyCalc>
      <h1>React Calc App</h1>
        <NumberBox>
        <FactorsInput 
        value={this.state.num1} onChange={this.handleChange} type="number"/>
        <CalcButton>
        <OperatioButton onClick={this.minus}>-</OperatioButton>
        <OperatioButton onClick={this.multiply}>*</OperatioButton>
        <OperatioButton onClick={this.divide}>/</OperatioButton>
        <OperatioButton onClick={this.add}>+</OperatioButton>
        </CalcButton>
        <FactorsInput value={this.state.num2} onChange={this.handleChange2} type="number"/>
        <ClearButton onClick={this.clear}>clear</ClearButton>
        </NumberBox>
      <Display>{this.state.result}</Display>
      </BodyCalc>
    </Container>
    )
  }
}

