import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [eneteredTitle, setEnteredTitle] = useState('');
    const [eneteredAmount, setEnteredAmount] = useState('');
    const [eneteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {

        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
    // we have to transfer the data to parent   
        event.preventDefault();
        const expenseData = {
            title: eneteredTitle,
            amount: eneteredAmount,
            date: new Date(eneteredDate)
        }

        props.onSaveExpenseData(expenseData);

        console.log(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };
    return (

        

        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">

                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={eneteredTitle}/>
                </div>

                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={eneteredAmount} />
                </div>

                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} value={eneteredDate}/>
                </div>

            </div>

            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )

}

export default ExpenseForm;