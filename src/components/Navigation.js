import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

const Navigation = () => {
  return (
    <div>
      <span>남욱's page</span>
      <List>
        <li>About me</li>
        <li>Projects</li>
        <li>W.I.L</li>
      </List>
    </div>
  );
};

export default Navigation;
