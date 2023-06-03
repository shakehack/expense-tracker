import React, { useState } from 'react'
import './App.css'
import Expenses from './component/Expenses/Expenses'
import NewExpense from './component/NewExpense/NewExpense'

const DUMMY = [
  { id: 'e1', title: 'aloo', date: new Date(2021, 2, 28), amount: '$252' },
  {
    id: 'e2',
    title: 'kanda',
    date: new Date(2020, 2, 4),
    amount: 252,
  },
  {
    id: 'e3',
    title: 'sweet potato',
    date: new Date(2021, 5, 25),
    amount: 252,
  },
  {
    id: 'e4',
    title: 'chocolate',
    date: new Date(2021, 5, 25),
    amount: 252,
  },
  {
    id: 'e5',
    title: 'choco',
    date: new Date(2023, 5, 25),
    amount: 252,
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
