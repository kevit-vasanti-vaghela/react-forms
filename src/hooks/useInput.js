import React, { useState, useReducer } from 'react'

let initialState = {
  value: "",
  isTouched: false
}

const myreducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value, 
      isTouched: state.isTouched
    }
  }
  if (action.type === 'BLUR') {
    return {
      value: state.value, 
      isTouched: true
    }
  }
  if (action.type === 'RESET') {
    return {
      value: '', 
      isTouched: false
    }
  }
  return initialState
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(myreducer, initialState)

  
  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (e) => {
    dispatch({ type: 'INPUT', value: e.target.value })
  }

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }
  return {
    value: inputState.value, 
    hasError, 
    valueChangeHandler, 
    inputBlurHandler,
    isValid: valueIsValid,
    reset
  }
}

export default useInput
