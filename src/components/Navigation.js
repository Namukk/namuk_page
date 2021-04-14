import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 15px 0;
  justify-content: space-between;
  /* position: fixed; */
`;

const Span = styled.span`
  margin-left: 15px;
  font-size: 30px;
`;

const List = styled.ul`
  width: 300px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  flex-direction: row;
  margin-right: 20px;
  margin-left: 0;
`;

const Navigation = () => {
  return (
    <NavContainer>
      <Span>남욱's page</Span>
      <List>
        <Li>
          <Link to="/profile">About me</Link>
        </Li>
        <Li>
          <Link to="/projects">Projects</Link>
        </Li>
        <Li>
          <Link to="/learning">W.I.L</Link>
        </Li>
      </List>
    </NavContainer>
  );
};

export default Navigation;
