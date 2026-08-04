import React from 'react'
import { NavLink } from 'react-router-dom';

export const CitNavLink = () => {
  return (
    <div>
        <NavLink to="/product/create"style={{marginRight:"20px"}}>
        Create Product
        </NavLink>
        <NavLink to="/product"style={{marginRight:"20px"}}>
        Product
        </NavLink>
        <NavLink to="/user/create"style={{marginRight:"20px"}}>
        Create User
        </NavLink>
        <NavLink to="/user"style={{marginRight:"20px"}}>
        User
        </NavLink>
    </div>
  )
}
export default CitNavLink;