/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import InputField from '../InputField/InputField';
import WatchField from './WatchField/WatchField';
import * as moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

const WATCH_INITIAL_STATE = [
  { name: 'Местное время', timeZone: moment().utcOffset(), id: '0' },
  {
    name: 'Берлин, Германия',
    timeZone: +120,
    id: '1',
  },
  { name: 'Абу-Даби, ОАЭ', timeZone: +240, id: '2' },
];

function Watcher() {
  const [watch, setWatch] = useState(WATCH_INITIAL_STATE);

  const inputData = [
    {
      inputName: 'name',
      inputLabel: 'Название',
      inputType: 'text',
      placeholder: 'Введите город',
      id: shortid.generate(),
    },
    {
      inputName: 'timeZone',
      inputLabel: 'Временная зона',
      inputType: 'number',
      placeholder: 'GMT',
      id: shortid.generate(),
    },
  ];
  const btnText = 'Добавить';

  const onSubmitHandler =(data) => {
    setWatch(prevState => [...prevState, data])
  }

  const onClickHandler = (id) => {
    const removeId = id;
    const newWatch = watch.filter((el) => el.id !== removeId);
    setWatch(newWatch);
  };

  return (
    <div className='Watcher'>
      <InputField
        inputData={inputData}
        btnText={btnText}
         onSubmit={onSubmitHandler}
      />
      <WatchField watch={watch} onClickHandler={onClickHandler} />
    </div>
  );
}

Watcher.propTypes = {};

export default Watcher;