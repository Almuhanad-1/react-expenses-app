import Card from '../UI/Card';
import ExpensesItem from './ExpensesItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020')

  const selectYearHandler = (year) => setFilterYear(year);

  const filteredExpenses = props.expenses.filter((expense => expense.date.getFullYear().toString() === filterYear));

  return (
    <Card className="expenses">
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesFilter selected={filterYear} onSelectYear={selectYearHandler} />
      <ExpenseList item={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
