import classes from "./Buyer.module.css";
import React, { Fragment } from "react";
import Button from "./Button";

const Buyer = (props) => {
    return <div className={classes.buyer}>
        {props.ondisplay.map((item) => {
            return <Fragment>
            <div className={classes.product} key={item.id}>
                <span>{item.name}</span>
                <span>{item.description}</span>
                <span>Price:${item.price}</span>
                <Button
                id={item.id}
                name={item.name}
                price={item.price}
                />
            </div>
            <hr className={classes.productDivider} />
            </Fragment>
        })}
    </div>
}
export default Buyer;