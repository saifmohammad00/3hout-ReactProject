import Appcontext from "./context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const itemTotal = action.item.price * (action.item.amount);
        const updatedTotalAmount = state.totalAmount + itemTotal;

        // Check if item already exists in cart
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            // If item exists, update the quantities
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // If item does not exist, add it to the cart
            updatedItems = state.items.concat(action.item);
        }

        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        let updatedItems;
        if(existingItem.amount===1){
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else{
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        
        // Calculate the updated total amount after removal
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
};

const ContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };


    return <Appcontext.Provider value={cartContext}>
        {props.children}
    </Appcontext.Provider>
}
export default ContextProvider;