import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const pr = props.price;
    const ItemTotal=props.price*(props.amount);
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2 className={classes.name}>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>Price: ${pr}</span>
                    <span className={classes.amount}>
                        {props.amount > 0 && `${props.amount}`}
                    </span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
            <div>
                 ${ItemTotal}
            </div>
        </li>
    );
};

export default CartItem;
