import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formStat, setFormStat] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onStoreNewExpense(newExpense)
  }

  const showForm = () => setFormStat(true)
  const hideForm = () => setFormStat(false)

  return (
    <div className='new-expense'>
      {!formStat && <button onClick={showForm}>Add New Expense</button>}
      {formStat && <ExpenseForm hideForm={hideForm} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense