/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import initLocalClocks from '../../../../utils/initLocalClocks';

const WatchAnalog = ({  onClickHandler, item }) => {
    const [time, setTime] = useState(initLocalClocks(item.timeZone));

    useEffect(() => {
      const timerID = setTimeout(() => {
        setTime(initLocalClocks(item.timeZone));
      }, 1000);
      return () => {
        clearTimeout(timerID);
      };
    });
  return (
    <li className='clock'>
      <span className='Watch_delete' onClick={onClickHandler} data-id={item.id}>
        &#x2715;
      </span>
      <span className='Watch_name'>{item.name}</span>
      <div className='hours-container'>
        <div
          className='hours'
          style={{
            transform: `rotateZ(${time.hours}deg)`,
            WebkitTransform: `rotateZ(${time.hours}deg)`,
          }}
        ></div>
      </div>
      <div className='minutes-container'>
        <div
          className='minutes'
          style={{
            transform: `rotateZ(${time.minutes}deg)`,
            WebkitTransform: `rotateZ(${time.minutes}deg)`,
          }}
        ></div>
      </div>
      <div className='seconds-container'>
        <div
          className='seconds'
          style={{
            transform: `rotateZ(${time.seconds}deg)`,
            WebkitTransform: `rotateZ(${time.seconds}deg)`,
          }}
        ></div>
      </div>
    </li>
  );
}

WatchAnalog.propTypes = {};

export default WatchAnalog;