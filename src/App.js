import React, { Fragment, useState } from "react";
import Seller from "./components/Seller/Seller";
import Buyer from "./components/Buyer/Buyer";
import AppcontextProvider from "./store/contextProvider";
import Cart from "./components/Cart/Cart";
function App() {
  const medicines = [
    { name: "Aspirin", description: "Pain relief, fever reduction, and anti-inflammatory", price:100,id:1},
    { name: "Paracetamol", description: "Pain relief and fever reduction", price:150, id:2},
    { name: "Ibuprofen", description: "Pain relief and anti-inflammatory", price:125, id:3},
    { name: "Amoxicillin", description: "Antibiotic", price:100, id:4},
    { name: "Lisinopril", description: "Blood pressure medication", price:150, id:5}
];
  const [items, setItems] = useState(medicines);
  const saveItems = (item) => {
    setItems((prevItems) => {
      const newItm = { ...item, id: prevItems.length + 1 };
      return [...prevItems, newItm];
    })
  }
  return (<AppcontextProvider>
    <Fragment>
      <Cart />
      <Seller onaddProduct={saveItems} />
      <Buyer ondisplay={items}/>
    </Fragment>
  </AppcontextProvider>
  );
}
export default App;