import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const { 
    value: firstname, 
    hasError: firstnameInputHasError, 
    valueChangeHandler: firstnameChangeHandler, 
    inputBlurHandler: firstnameBlurHandler,
    isValid: firstnameIsValid,
    reset: resetFirstnameInput
  } = useInput(value => value.trim() !== '');

  const { 
    value: email, 
    hasError: emailInputHasError, 
    valueChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.includes('@'));

  const { 
    value: lastname, 
    hasError: lastnameInputHasError, 
    valueChangeHandler: lastnameChangeHandler, 
    inputBlurHandler: lastnameBlurHandler,
    isValid: lastnameIsValid,
    reset: resetLastnameInput
  } = useInput(value => value.trim() !== '');

  let formIsValid = false

  if(firstnameIsValid && emailIsValid && lastnameIsValid) {
    formIsValid = true;
  }
  
 
  const submitHandler = (e) => {
    e.preventDefault()

    if(!firstnameIsValid && !emailIsValid && !lastnameIsValid){
      return
    }
    resetFirstnameInput()
    resetEmailInput()
    resetLastnameInput()
  }
  const firstnameInputClasses = firstnameInputHasError ? 'form-control invalid' : 'form-control'
  const lastnameInputClasses = lastnameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstnameInputClasses}>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' id='firstname' onChange={firstnameChangeHandler} onBlur={firstnameBlurHandler} />
        </div>
        {firstnameInputHasError && <p className="error-text">Firstname must not be empty.</p>}
        <div className={lastnameInputClasses}>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname' onChange={lastnameChangeHandler} onBlur={lastnameBlurHandler} />
        </div>
        {lastnameInputHasError && <p className="error-text">Lastname must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
      </div>
      {emailInputHasError && <p className="error-text">Email must not be emptyand it must contain '@'</p>}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
