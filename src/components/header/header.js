import { useState } from "react";
import { Link } from "react-router-dom";

import {
  BorderColorOutlined,
  CloseOutlined,
  FormatAlignJustifyOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./header.css";

const Header = (props) => {
  const [term, setTerm] = useState("");
  const [active, setActive] = useState(false);

  const updateTermHandler = (e) => {
    const term = e.target.value;
    setTerm(term);
    props.updateTermHandler(term);
  };
  console.log(term);
  return (
    <div className="header">
      <BorderColorOutlined />
      <div className="searchbar">
        <SearchOutlined />
        <input
          onChange={updateTermHandler}
          type="text"
          value={term}
          className="searchbar-input"
          placeholder="Search..."
        />
        {term.length !== 0 && (
          <i>
            <CloseOutlined />
          </i>
        )}
      </div>
      <ul className={active ? "header-menu__active" : "header-menu"}>
        {active && (
          <div className="user-info">
            <Avatar />
            <p className="username">Madina Inomjonova</p>
            <p className="email">kmadinainomjonova@gmail.com</p>
          </div>
        )}
        <Link to="/">
          <li onClick={() => setActive(false)}>Posts</li>
        </Link>
        <Link to="/about">
          <li onClick={() => setActive(false)}>About us</li>
        </Link>
      </ul>
      <div
        className={"hamburger-menu"}
        onClick={() => setActive((prev) => !prev)}
      >
        {!active ? <FormatAlignJustifyOutlined /> : <CloseOutlined />}
      </div>
    </div>
  );
};

export default Header;
