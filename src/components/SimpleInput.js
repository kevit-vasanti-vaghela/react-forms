import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('')
  const [nameIsValid, setNameIsValid] = useState(false)
  const [nameTouched, setNameTouched] = useState(false)
  const nameInputRef = useRef()

  useEffect(() => {
    if(nameIsValid) {
      console.log('Name Input is valid!')
    }
  },[nameIsValid])

  const nameInputHandler = (e) => {
    setName(e.target.value)
    // console.log(name)
    console.log('ONCHANGE',e.target.value)
  }

  const nameInputBlurHandler = () => {
    setNameTouched(true)
    
    if(name.trim() === '') {
      setNameIsValid(false)
      return
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setNameTouched(true)
    let enteredValue = nameInputRef.current.value

    if(name.trim() === '') {
      setNameIsValid(false)
      return
    }
    setNameIsValid(true)
    console.log('SUBMIT',enteredValue)
    setName('')
    // nameInputRef.current.value = ''   // NOT IDEAL , DON'T MANIPULATE THE DOM
  }

  const nameInputIsInvalid = !nameIsValid && nameTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

    return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' id='name' 
          onChange={nameInputHandler} 
          onBlur={nameInputBlurHandler}
          value={name} />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
