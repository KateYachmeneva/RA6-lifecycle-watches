import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text}) => {
    return (
<div className="btn btn-primary" type="submit">{text}</div>
    );
}
export default Button;