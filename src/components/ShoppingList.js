import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState("")

  function handleChange(e) {
    if (e.target.value === "All") {
      setSelectedCategory("")
    } else {
      setSelectedCategory(e.target.value)
    }
  }

  let itemList = items.filter(item => {
    if (selectedCategory === "") {
      return item
    } else {
      return item.category === selectedCategory
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
