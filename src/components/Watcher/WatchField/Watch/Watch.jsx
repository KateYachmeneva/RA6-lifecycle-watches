import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

function Watch({ onClickHandler, item }) {
  const [time, setTime] = useState(
    moment().utcOffset(Number.parseInt(item.timeZone)).format('LTS')
  );

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTime(moment().utcOffset(Number.parseInt(item.timeZone)).format('LTS'));
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  });

  return (
    <li className='Watch'>
      <span className='Watch_delete' onClick={onClickHandler} data-id={item.id}>
        &#x2715;
      </span>
      <span className='Watch_name'>{item.name}</span>
      <span className='Watch_time'>{time}</span>
    </li>
  );
}

Watch.propTypes = {};

export default Watch;