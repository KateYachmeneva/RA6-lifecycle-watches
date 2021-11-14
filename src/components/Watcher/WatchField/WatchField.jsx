import React from 'react';
import PropTypes from 'prop-types';
import Watch from './Watch/Watch';
import WatchAnalog from './WatchAnalog/WatchAnalog';

const WatchField = ({watch, onClickHandler}) => {
    return(
        <>
        <ul className='WatchField'>
          {watch.map((item) => (
            <Watch key={item.id} item={item} onClickHandler={onClickHandler} />
          ))}
        </ul>
        <ul className='WatchField'>
          {watch.map((item) => (
            <WatchAnalog
              key={item.id}
              item={item}
              onClickHandler={onClickHandler}
            />
          ))}
        </ul>
      </>
    );
}
WatchField.propTypes = {};

export default WatchField;