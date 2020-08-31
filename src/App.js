import React from 'react';
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

console.log(initialExpenses)

function App() {
  return (
    <>
      <Alert/>
      <ExpenseForm/>
      <ExpenseList/>
    </>
  );
}

export default App;
