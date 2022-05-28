import React from 'react';
import { toNumber, divide, truthyEither } from './helpers';
// import { curry } from 'ramda';
const Either = require('ramda-fantasy').Either;

class App extends React.Component<any, any>{
  state = {
    inputNumber: 0,
    divideTo: 0,
  }

  handleInputA = (value: string) => {
    this.setState({ inputNumber: toNumber(value).getOrElse(this.state.inputNumber)} );
  }

  handleInputB = (value: string) => {
    this.setState({ divideTo: toNumber(value).getOrElse(this.state.divideTo)} );
  }

  renderSuccess = () => <div>Cool</div>;
  renderFail = () => <div>Opps</div>;

  render() {
    const res = divide(this.state.inputNumber, this.state.divideTo);
    const cond = truthyEither(res.getOrElse(0) < 50);
    const renderMessage = Either
        .either(this.renderFail, this.renderSuccess)

    return (
        <div className="App">
          <div>
            <input type="text"
                   placeholder="Provide value to divide"
                   onChange={e => this.handleInputA(e.target.value)}
                   value={this.state.inputNumber}/>
            <input type="text"
                   placeholder="Provide value to Divider"
                   onChange={e => this.handleInputB(e.target.value)}
                   value={this.state.divideTo}/>
          </div>
          {renderMessage(cond)}
        </div>
    );
  }
}

export default App;
