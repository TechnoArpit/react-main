import React from "react";
import { Route, Routes } from "react-router-dom";
import ReadAllProduct from "./product/ReadAllProduct";
import CreateProduct from "./product/CreateProduct";
import ReadSpecificProduct from "./product/ReadSpecificProduct";
import UpdateProduct from "./product/UpdateProduct";
import ReadAllUser from "./user/ReadAllUser";
import CreateUser from "./user/CreateUser";
import ReadSpecificUser from "./user/ReadSpecificUser";
import UpdateUser from "./user/UpdateUser";

const CitRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/product"
          element={<ReadAllProduct></ReadAllProduct>}
        ></Route>
        <Route
          path="/product/create"
          element={<CreateProduct></CreateProduct>}
        ></Route>
        <Route
          path="/product/:id"
          element={<ReadSpecificProduct></ReadSpecificProduct>}
        ></Route>
        <Route
          path="/product/update/:id"
          element={<UpdateProduct></UpdateProduct>}
        ></Route>

        <Route 
        path="/user" 
        element={<ReadAllUser></ReadAllUser>}
        ></Route>
        <Route
        path="/user/create" 
        element={<CreateUser></CreateUser>}
        ></Route>
        <Route
          path="/user/:id"
          element={<ReadSpecificUser></ReadSpecificUser>}
        ></Route>
        <Route
          path="/user/update/:id"
          element={<UpdateUser></UpdateUser>}
        ></Route>
      </Routes>
    </div>
  );
};
export default CitRouter;
/* 
localhost:5173/product => Read All Product
localhost:5173/product/create => create Product
localhost:5173/product/id: => read specific Product
localhost:5173/product/update/id: => update specific Product

localhost:5173/User => Read All User
localhost:5173/User/create => create User
localhost:5173/User/id: => read specific User
localhost:5173/User/update/id: => update specific User

*/
