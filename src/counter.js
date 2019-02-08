import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const {
    count,
    decrementCounter,
    deleteCounter,
    id,
    incrementCounter,
    title
  } = props;
  return (
    <div className="counter-container">
      <div className="title">
        {title}
        <button onClick={() => { deleteCounter(id); }}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
      <div className="count">
        <button onClick={() => { decrementCounter(id); }}>
          <i className="fas fa-minus" />
        </button>
        <span>{count}</span>
        <button onClick={() => { incrementCounter(id); }}>
          <i className="fas fa-plus" />
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  deleteCounter: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Counter;