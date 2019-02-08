import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import Counter from './counter';
import Input from './input';

import {
  addCounter,
  decrementCounter,
  deleteCounter,
  getCounters,
  incrementCounter
} from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterName: '',
      counters: []
    };
  }

  componentDidMount() {
    this.onGetCounters();
  }

  onGetCounters = () => {
    getCounters().then(({ data }) => {
      this.setState({ counters: data });
    });
  }

  onAddInput = () => {
    const { counterName } = this.state;
    const TRIMMED = counterName.trim();
    if (!_.isEmpty(TRIMMED)) {
      addCounter(counterName).then(() => {
        this.onGetCounters();
        this.setState({ counterName: '' });
      });
    }
  }

  onDeleteCounter = (id) => {
    deleteCounter(id).then(this.onGetCounters);
  }

  onInputChange = (e) => {
    this.setState({ counterName: e.target.value });
  }

  onIncrement = (id) => {
    incrementCounter(id).then(this.onGetCounters);
  }

  onDecrement = (id) => {
    decrementCounter(id).then(this.onGetCounters);
  }

  render() {
    const { counterName, counters } = this.state;
    const COUNT_ARR = counters.map((counter) => counter.count);
    const TOTAL = _.isEmpty(COUNT_ARR) ? 0 :
      COUNT_ARR.reduce((a,b) => a + b);
      
    return (
      <div className="card">
        <h1>✨ Counter App ✨</h1>
        <Input
          counterName={counterName}
          onInputChange={this.onInputChange}
          onAddInput={this.onAddInput}
          disabled={_.isEmpty(counterName)}
        />
        <div className="counters-container">
          {
            counters.map((counter, i) => (
              <Counter
                key={i}
                decrementCounter={this.onDecrement}
                deleteCounter={this.onDeleteCounter}
                incrementCounter={this.onIncrement}
                {...counter}
              />
            ))
          }
        </div>
        {
          !_.isEmpty(counters) && (
            <div className="total">
              <span>Total:</span>
              <span>{TOTAL}</span>
            </div>
          )
        }
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));