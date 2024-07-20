import './Card.css';
import React from 'react';

function Card(props) {
    const k = 'card '+props.className;
    return <div className={k}>{props.children}</div>





}
export default Card;