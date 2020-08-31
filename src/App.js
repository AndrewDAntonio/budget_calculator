import React, { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import {v4 as uuid} from 'uuid'


const initialExpenses = [
  {id:uuid(), charge:`rent`, amount:1000},
  {id:uuid(), charge:`car payment`, amount:2000},
  {id:uuid(), charge:`credit card bill`, amount:3000}
];



function App() {

  const [expenses, setExpenses] = useState(initialExpenses)
  console.log(expenses)

  return (
    <>
      <Alert/>
      <h1>Budget Calculator</h1>
      <main className='App'>
        <ExpenseForm/>
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        Total Spending: <span className="total">
          ${expenses.reduce((acc, curr) =>{
            return acc += curr.amount
          },0)}
        </span>
      </h1>
      
    </>
  );
}

export default App;
