import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../App.css';

const ReadAllProduct = () => {
let [products, setProducts] = useState([]);

const getData =async () => {
    let result = await axios({
      url: "http://localhost:8000/product",
      method: "get",
    });
    setProducts(result.data.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="products-container">
      {products.map((value, index) => {
        return (
          <div key={index}>
            <h3>name is: {value.name}</h3>
            <p>price is: {value.price}</p>
            <p>quantity is: {value.quantity}</p>
            <p>description is: {value.description}</p>
          </div>)
        })
      }
    </div>
  )
}

export default ReadAllProduct