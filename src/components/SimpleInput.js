import { useState } from "react";
import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const { 
    value: name, 
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangeHandler, 
    inputBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const { 
    value: email, 
    hasError: emailInputHasError, 
    valueChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false

  if(nameIsValid && emailIsValid) {
    formIsValid = true;
  }
  
 
  const submitHandler = (e) => {
    e.preventDefault()

    if(!nameIsValid && !emailIsValid){
      return
    }
    resetNameInput()
    resetEmailInput()
  }
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'

    return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' id='name' 
          onChange={nameChangeHandler} 
          onBlur={nameBlurHandler}
          value={name} />
      </div>
      {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailChangeHandler} 
          onBlur={emailBlurHandler} value={email} />
      </div>
      {emailInputHasError && <p className="error-text">Email must not be emptyand it must contain '@'</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
