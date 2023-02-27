import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('')
  const [nameTouched, setNameTouched] = useState(false)
  
  const nameIsValid = name.trim() !== ''
  const nameInputIsInvalid = !nameIsValid && nameTouched

  let formIsValid = false

  if(nameIsValid) {
    formIsValid = true;
  }
  
  const nameInputHandler = (e) => {
    setName(e.target.value)
  }

  const nameInputBlurHandler = () => {
    setNameTouched(true)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setNameTouched(true)

    if(!nameIsValid){
      return
    }
    setName('')
    setNameTouched(false)
  }


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

    return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' id='name' 
          onChange={nameInputHandler} 
          onBlur={nameInputBlurHandler}
          value={name} />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
