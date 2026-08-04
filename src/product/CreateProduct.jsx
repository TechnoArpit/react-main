import React, { useState } from 'react'

const CreateProduct = () => {
    let [name, setName] = useState("");
    let [price,setPrice] = useState("");
    let [quantity,setQuantity] = useState("");
    let [description,setDescription] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        let product = {
            name: name,
            price: price,
            quantity: quantity,
            description: description
        };
        console.log(product);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Quantity</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateProduct