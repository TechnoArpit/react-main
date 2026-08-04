import React, { useState } from "react";

const CreateUser = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [phone, setPhone] = useState("");
  let [description, setDescription] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      description: description,
    };
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <button> Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
