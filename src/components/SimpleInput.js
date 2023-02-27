import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('')
  const [nameIsValid, setNameIsValid] = useState(true)
  const nameInputRef = useRef()

  const nameInputHandler = (e) => {
    setName(e.target.value)
    // console.log(name)
    console.log('ONCHANGE',e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
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

    const nameInputClasses = nameIsValid ? 'form-control' : 'form-control invalid'

    return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputHandler} value={name} />
      </div>
      {!nameIsValid && <p className="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
