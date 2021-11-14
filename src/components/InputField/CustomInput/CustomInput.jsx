import React from 'react';
import PropTypes from 'prop-types';


const CustomInput = ({ item, onChangeHandler }) => {

  const { inputName, inputLabel, inputType, placeholder } = item;
  return (
    <div className='CustomInput'>
      <label htmlFor={inputName} className='CustomInput__label'>
        {inputLabel}
      </label>
      <input
        className="form-control"
        id={inputName}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

CustomInput.propTypes = {};

export default CustomInput;