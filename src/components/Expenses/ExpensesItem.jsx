import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpensesItem.css';


const ExpensesItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpensesItem;
