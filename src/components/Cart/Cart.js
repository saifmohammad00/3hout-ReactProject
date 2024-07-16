import classes from "./Cart.module.css";
import Cartbox from "./Cartbox";
import { Fragment, useContext, useState } from "react";
import Context from "../../store/context";
import CartIcon from "./CartIcon";

const Cart = () => {
    const conCtx=useContext(Context);
    const lengthItems=conCtx.items.length;
    const [overlay, setoverlay] = useState(false);
    const cartHandle = (event) => {
        setoverlay(true);
    }
    const x=(event)=>{
        setoverlay(event);
    }
    return <Fragment>
           <h1>Medical Store</h1>
            <button className={classes.button} onClick={cartHandle}>
            <span className={classes.cart}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{lengthItems}</span>
        </button>
        {overlay && <Cartbox handle={x} />}
    </Fragment>
}
export default Cart;