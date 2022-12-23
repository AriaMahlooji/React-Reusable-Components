import React, { Fragment } from "react";
import Button from "./Button";
import Card from "./Card";
import styles from './ErrorModal.module.css';



const ErrorModal=(props)=>{
    return(
        <Fragment>
            <div className={styles.backdrop} onClick={props.onConfirmError}/>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirmError}>{props.reaction}</Button>
                </footer>
            </Card>
        </Fragment>
    );
}

export default ErrorModal;