import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>

      {props.items.map((expense) => (
        <ExpenseItem
          key ={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          // locationOfExpenditure ={expense.locationOfExpenditure}
        ></ExpenseItem>
      ))}
    </Card>
    </div>
  );
};

export default Expenses;
