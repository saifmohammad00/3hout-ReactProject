import classes from "./Form.module.css";
import { useState } from "react";

const Form = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0
    });
    const submitHandler = (event) => {
        event.preventDefault();
        props.onaddProduct(formData);
        setFormData({
            name: '',
            description: '',
            price: 0
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <form className={classes.seller} onSubmit={submitHandler}>
            <div>
                <label>Medicine name
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>Description
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>Price
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                </label>
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default Form;