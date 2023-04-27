import React from 'react'
import ExpensesItem from './ExpensesItem'
import './ExpenseList.css'
const ExpenseList = (props) => {


  if (props.item.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>
  }

  return (
    <ul className='expenses-list'>
      {props.item.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  )
}

export default ExpenseList