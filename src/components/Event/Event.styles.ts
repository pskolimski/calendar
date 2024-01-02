import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  border-radius: 10px 10px 0 0;
  color: white;

  p {
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 15px;
`;
