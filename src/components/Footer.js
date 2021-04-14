import React from "react";
import styled from "styled-components";

const Span = styled.span`
  position: fixed;
  bottom: 20px;
  right: 10px;
`;

const AppFooter = () => {
  return <Span>&copy; Namuk Yoo</Span>;
};

export default AppFooter;
