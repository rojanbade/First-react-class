import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import axios from "axios";

const Menu = () => {
  const [postData, setPostData] = useState([]);

  const getRequest = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
      setPostData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  function add(a,b){}
  add(1,2)

  const postRequest = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log("response", JSON.stringify(response.data.body));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  const name = "ghode jatra";

  console.log(`festival ${name}`);
  return (
    <>
      <div className="navbar">
        <h1>Yesterday's festival</h1>
        <Link to="/contact" className="links">
          Contact
        </Link>
        <Link to="/about" className="links">
          About
        </Link>

        <ul>
          {postData.length > 0 &&
            postData.map((data) => {
              return <li key={data.id}>{data.title}</li>;
            })}
        </ul>
      </div>
      <button onClick={postRequest}>POST DATA</button>
    </>
  );
};

export default Menu;
