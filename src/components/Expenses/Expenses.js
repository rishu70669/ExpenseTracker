import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React from 'react';
const Expenses = (props) => {

  return (

    <Card className="expenses">


      {
        props.item.map(
          expense => (

            <ExpenseItem
              date={expense.date}
              title={expense.title}
              amount={expense.amount} />
          )
        )
      }



      {/* <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount} />


      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount} /> */}

    </Card>
  )

}

export default Expenses;


