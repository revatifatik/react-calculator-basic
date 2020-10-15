import React, { Component } from "react";
import "./index.css";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: null,
      totalOperations: 0,
      input1: "",
      input2: "",
      selectedOperator: "+"

    }
  }
  onInputChange(e) {
    this.setState({ [e.target.name]: parseInt(e.target.value) });
  }
  getResult(string) {
    this.setState({ selectedOperator: string, totalOperations: this.state.totalOperations + 1 })
    switch (string) {
      case '+':
        return this.state.input1 + this.state.input2;
      case "-":
        return this.state.input1 - this.state.input2;
      case "*":
        return this.state.input1 * this.state.input2;
      case "/":
        return this.state.input1 / this.state.input2;
      default:
        return this.state.input1 + this.state.input2;
    }
  }
  onCalculateClick(string) {
    this.setState({ result: this.getResult(string) })
  }
  onResetClick() {
    this.setState({
      result: '', input1: "",
      input2: "", selectedOperator: "+"
    })
  }

  render() {
    return (
      <div className="layout-column align-items-center">
        <div data-testid="total-operations" className="pt-50 total-operations">Total operations performed: {this.state.totalOperations}</div>
        <div className="card">

          <section className="card-text">
            <div className="layout-row justify-content-around align-items-center mt-40">
              <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                name="input1" value={this.state.input1} onChange={(e) => this.onInputChange(e)} />
              <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{this.state.selectedOperator}</label>
              <input name="input2" value={this.state.input2} type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                placeholder="Eg: 2" onChange={(e) => this.onInputChange(e)} />
            </div>

            <div className="layout-row justify-content-around mt-30">
              <button className="operationFont" type="submit" data-testid="addButton" onClick={() => this.onCalculateClick("+")}>+</button>
              <button className="operationFont" type="submit" data-testid="subtractButton" onClick={() => this.onCalculateClick("-")}>-</button>
              <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={() => this.onCalculateClick("*")}>*</button>
              <button className="operationFont" type="submit" data-testid="divideButton" onClick={() => this.onCalculateClick("/")}>/</button>
            </div>

            <div className="layout-row justify-content-between align-items-center mt-30">
              <button type="reset" data-testid="resetButton" className="outline danger" onClick={() => this.onResetClick()}>Reset</button>
              {this.state.result !== null && <div className="layout-row justify-content-center align-items-center result-container">
                <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {this.state.result}</div>
              </div>}
            </div>
          </section>

        </div>
      </div>
    );
  }
}