import React from 'react';
import { toNumber, divide, truthyEither } from './helpers';
import { curry } from 'ramda';/**/
const Either = require('ramda-fantasy').Either;
const Maybe = require('ramda-fantasy').Maybe
const { Nothing } = Maybe;

class App extends React.Component<any, any>{
  state = {
    inputNumber: Nothing(),
    divideTo: Nothing(),
  }

  handleInputA = (value: string) => {
    this.setState({ inputNumber: toNumber(value)} );
  }

  handleInputB = (value: string) => {
    this.setState({ divideTo: toNumber(value)} );
  }

  renderSuccess = (res: any) => () => <div style={{color: 'green'}}>{res}</div>;
  renderFail = (res: any) => () => <div style={{color: 'red'}}>{res}</div>;

  render() {
    const res = divide(this.state.inputNumber, this.state.divideTo);
    const cond = truthyEither(res.getOrElse(0) < 50);

    const renderMessage = Either
        .either(
            curry(this.renderFail)(res.getOrElse(0)),
            curry(this.renderSuccess)(res.getOrElse(0))
        )

    return (
        <div className="App">
          <div>
            <input type="text"
                   placeholder="Provide value to divide"
                   onChange={e => this.handleInputA(e.target.value)}
                   value={this.state.inputNumber.getOrElse('')}/>
            <input type="text"
                   placeholder="Provide value to Divider"
                   onChange={e => this.handleInputB(e.target.value)}
                   value={this.state.divideTo.getOrElse('')}/>
          </div>
          {renderMessage(cond)}
        </div>
    );
  }
}

export default App;
