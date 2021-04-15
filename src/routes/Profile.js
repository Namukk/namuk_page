import React from "react";
import styled from "styled-components";

const Intro = styled.div`
  margin-bottom: 50px;
`;

const Social = styled.div`
  display: flex;
  position: fixed;
  bottom: 20px;
  left: 20px;
`;

const SocialList = styled.div`
  margin-right: 10px;
`;

const AppProfile = () => {
  return (
    <>
      <Intro>저는 ...</Intro>
      <Social>
        <SocialList>
          <a href="https://github.com/Namukk">Github</a>
        </SocialList>
        <SocialList>
          <a href="https://www.facebook.com/mark.you.5/">Facebook</a>
        </SocialList>
        <SocialList>
          <a href="https://www.instagram.com/na_mooky/">Instagram</a>
        </SocialList>
      </Social>
    </>
  );
};

export default AppProfile;
