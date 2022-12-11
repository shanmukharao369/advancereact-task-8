import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem=(props)=> {

  const [title,setTitle] = useState(props.title);
  const [amount,setExpense] = useState(props.amount)


  const ClickHandler =()=>{
    setTitle('Updated');
    console.log(title);
  };

  const ClickExpenses  =()=>{
    setExpense(100);
  }

  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}-{props.locationOfExpenditure}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={ClickHandler}>Change Title</button>
      <button onClick={ClickExpenses}>Change Expenses</button>
     
    </Card>
  );
}

export default ExpenseItem;