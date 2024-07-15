import { Fragment, useContext, useState } from "react"
import context from "../../store/context";
const Button = (props) => {
    const conCtx = useContext(context);
    const [newItem, setNewItem] = useState({
        id:props.id,
        name:props.name,
        description:props.description,
        price:props.price,
        amount:1
    });
    const handle=(e)=>{
        setNewItem((prevItems)=>({...prevItems,amount:+e.target.value}));
    }
    const buttonHandler = () => {
            const newItemToAdd = {
                id:newItem.id,
                name:newItem.name,
                price:+newItem.price,
                amount:+newItem.amount
            };
            conCtx.addItem(newItemToAdd);
    };

    return (<Fragment>
        <input type="number" defaultValue={1} min={1} max={5} onChange={handle}/>
        <button onClick={buttonHandler} type="button">
            Add to Cart
        </button>
    </Fragment>
    );
};

export default Button;