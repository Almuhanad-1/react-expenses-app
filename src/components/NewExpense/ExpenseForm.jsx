import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // const [enteredInput, setEnteredInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredTitle: e.target.value
    // })
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredAmount: e.target.value
    // })
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)

    // whenever u update a state and depend on the previous value u shouldn't use this method
    /* setEnteredInput({
      ...enteredInput,
      enteredDate: e.target.value
     }) */

    // instead u should use this one
    /* setEnteredInput((previousValue) => {
      return {
        ...previousValue,
        enteredDate: e.target.value
      }
    }) */
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredDate('')
    setEnteredAmount('')
    props.hideForm()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={enteredTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" min='0.1' step='0.1' value={enteredAmount} onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type='button' onClick={props.hideForm}>Cancel</button>
      </div>
    </form>
  )
}

export default ExpenseForm