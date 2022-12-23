import React from "react";
import styles from './Card.module.css'

const Card=(props)=>{
    return(
        <div className={`${styles.card} ${props.className}`}>{props.children}</div>
        )
}
// for styling we are using two different css files one specificly for this componrnt which is called 
        //... Card.module.css and one which is sent from outside as a class name for Card component.
export default Card;