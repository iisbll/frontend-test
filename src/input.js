import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <div className="input-container">
      <input
        onChange={props.onInputChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && props.counterName)
            props.onAddInput()
        }}
        placeholder="Enter counter name"
        type="text"
        value={props.counterName}
      />
      <button
        className="add-input"
        disabled={props.disabled}
        onClick={props.onAddInput}
      >
        <i className="fas fa-plus-circle" />
      </button>
    </div>
  );
};

Input.propTypes = {
  counterName: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onAddInput: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  disabled: true
};

export default Input;