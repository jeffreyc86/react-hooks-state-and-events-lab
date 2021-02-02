import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [dark, setDark] = useState(false)

  const handleClick = (e) => {
    if (dark === false){
      e.target.innerText = "Light Mode"
      setDark(dark => !dark)
    } else {
      e.target.innerText = "Dark Mode"
      setDark(dark => !dark)
    }
  }


  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (dark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
