import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonClick() {
  const navigate = useNavigate();

  // const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const [pwd, setPwd] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePwdChange = (e) => {
    setPwd(e.target.value);
  };

  const checkPassword = () => {
    if (pwd === "abc@123") {
      navigate("/");
    } else {
      console.log("wrong password");
    }
  };

  useEffect(() => {
    document.title = `You clicked ${name} times`;
  });

  return (
    <React.Fragment>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="text" value={pwd} onChange={handlePwdChange} />
      <p> Your name is : {name}</p>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
      <button onClick={checkPassword}>Submit pwd</button>
    </React.Fragment>
  );
}
