import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('')
  const nameInputRef = useRef()

  const nameInputHandler = (e) => {
    setName(e.target.value)
    // console.log(name)
    console.log('ONCHANGE',e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let enteredValue = nameInputRef.current.value
    console.log('SUBMIT',enteredValue)
    setName('')
    // nameInputRef.current.value = ''   // NOT IDEAL , DON'T MANIPULATE THE DOM
  }

    return (
    <form onSubmit={submitHandler}>
      <div className='form-control' >
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputHandler} value={name} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
