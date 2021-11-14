import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import CustomInput from './CustomInput/CustomInput';
import shortid from 'shortid';


const initialState = {
  name: '',
  timeZone: ''
}

const InputField = ({onSubmit,inputData,btnText}) =>{
  const [watch, setWatch] = useState(initialState);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const  payload = {
      ...watch,
      id: shortid.generate(),
    }
    // setWatch({
    //   name: '',
    //   timeZone: ''
    // })
    onSubmit(payload);
  }

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
   
    console.log(event.target);
    setWatch(prevState => ({...prevState, [name]: value}));

  }
  return (
    <form className='row' onSubmit={onSubmitHandler}>
      {inputData.map((item) => (
        <CustomInput
          key={item.id}
          item={item}
          onChangeHandler={onChangeHandler}
        />
      ))}
        <div className="col-md-4 align-self-end">
        <button className="btn btn-primary" type="submit">Добавить часы</button>
      </div>
</form>
    )
};

InputField.propTypes = {};

export default InputField;