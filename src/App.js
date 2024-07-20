import './App.css';
import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';


let Dummy_Expenses = [
  {
    id:'e1',
    title:'school Fee',
    amount :250,
    date:new Date(2021,5,21)
  },

  {
    id:'e2',
    title:'books',
    amount :230,
    date:new Date(2021,2,22)
  },

  {
    id:'e3',
    title:'House Rent',
    amount :800,
    date:new Date(2021,5,12)
  },

  {
    id:'e4',
    title:'Food',
    amount :5000,
    date:new Date(2022,5,11)
  }
];

const App= ()=>{
  // let expenseDate = new Date(2021,3,28);
  // let expenseTitle= "School fee";
  // let expenseAmount=300;
    
     const[expenses,setExpenses]= useState(Dummy_Expenses);
  
     


  const addExpenseHandler = (expense)=>{
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
    
};

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses}/>
      
        
    </div>
  );
}

export default App;
