import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [description, setDescription] = useState("");
  let params = useParams();
  let navigate = useNavigate();

  console.log(params.id);

  let getData = async () => {
    let result = await axios({
      url: `http://localhost:8000/product/${params.id}`,
      method: "get",
    });
    let data = result.data.data;
    setName(data.name);
    setPrice(data.price);
    setQuantity(data.quantity);
    setDescription(data.description);
  }

    useEffect(() => {
      getData();
    }, []);

    let handleSubmit = async (e) => {
      e.preventDefault();
      let product = {
        name: name,
        price: price,
        quantity: quantity,
        description: description,
      };
      // console.log(product);

      // send the product data to the backend server using fetch api
      // localhost:8000/product, post
      try {
        let result = await axios({
          url: `http://localhost:8000/product/${params.id}`,
          method: "patch",
          data: product,
        });
        navigate("/product");
        setName("");
        setPrice("");
        setQuantity("");
        setDescription("");
        toast.success("Product updated successfully");
        // success
      } catch (error) {
        toast.error(error.response.data.error);
        //fail
        // toast.error("something went wrong");
      }
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  };

  export default UpdateProduct;


/* 

*/
