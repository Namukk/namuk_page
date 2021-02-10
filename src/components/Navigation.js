import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

const Navigation = () => {
  return (
    <div>
      <span>남욱's page</span>
      <List>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/learning">W.I.L</Link>
        </li>
      </List>
    </div>
  );
};

export default Navigation;
