import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React,{useState} from 'react';

const ExpenseItem = (props) => {
    // const [newTitle,setNewTitle] = useState("Hii");
    // const [title,setTitle] = useState(props.title);
    // const clickHandler = ()=>{
    //    setTitle(newTitle);
    // }
    //   const changeHandler = (event)=>{
    //         setNewTitle(event.target.value);
    //   }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
            <h2>{props.title}</h2></div>
            <div className='expense-item-price'>{props.amount}</div>
        {/* <input type="text" value = {newTitle} onChange={changeHandler}/>
        <button class="butt" onClick={clickHandler}>Change Title</button> */}
        </Card>



    )
}

export default ExpenseItem;