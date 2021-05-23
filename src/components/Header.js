import React from "react";
import styled from "styled-components";

const Span = styled.span`
  color: red;
`;

const AppHeader = () => {
  return (
    <div>
      <Span>Header Span</Span>
    </div>
  );
};

export default AppHeader;
