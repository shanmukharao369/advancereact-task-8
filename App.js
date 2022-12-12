import React ,{ useState } from 'react'
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: "vizag",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    locationOfExpenditure: "Hyd",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "Goa",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpenditure: "pune",
  },
];

const App=()=> {
  const [expenses,setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense)  => {
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses ];
    });
  }

  // return React.createElement('div',{},
  // React.createElement(Expenses,{items:expenses}));

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
