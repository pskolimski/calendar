import React from "react";
import { Content, Wrapper } from "./MainTemplate.styles";

interface Props {
  children: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default MainTemplate;
