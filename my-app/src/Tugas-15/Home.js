import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = (props) => {
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath("/" + window.location.pathname.split("/")[1]);
  }, []);

  console.log(path);
  return (
    <div className="home-wrapper">
      {/* <ul>
        <li className={path == "/" ? "active" : ""}>
          <Link to="/" onClick={() => setPath("/")}>
            Home
          </Link>
        </li>
      </ul> */}
      <ul>
        <li
          className={
            path == "/daftar-buah-context" || path == "/" ? "active" : ""
          }
        >
          <Link
            to="/daftar-buah-context"
            onClick={() => setPath("/daftar-buah-context")}
          >
            Daftar Buah Context
          </Link>
        </li>
      </ul>
      <ul>
        <li className={path == "/daftar-buah" ? "active" : ""}>
          <Link to="/daftar-buah" onClick={() => setPath("/daftar-buah")}>
            Daftar Buah
          </Link>
        </li>
      </ul>
      <ul>
        <li className={path == "/table-fruit" ? "active" : ""}>
          <Link to="/table-fruit" onClick={() => setPath("/table-fruit")}>
            Table Fruit
          </Link>
        </li>
      </ul>
      <ul>
        <li className={path == "/clock" ? "active" : ""}>
          <Link to="/clock" onClick={() => setPath("/clock")}>
            Clock
          </Link>
        </li>
      </ul>
      <ul>
        <li className={path == "/table-props" ? "active" : ""}>
          <Link to="/table-props" onClick={() => setPath("/table-props")}>
            Tabel Props
          </Link>
        </li>
      </ul>
      <ul>
        <li className={path == "/table" ? "active" : ""}>
          <Link to="/table" onClick={() => setPath("/table")}>
            Tabel
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
