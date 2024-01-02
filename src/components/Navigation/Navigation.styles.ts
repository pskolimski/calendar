import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
`;

export const Form = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  box-shadow: 4px 4px 15.6px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    box-shadow: 4px 4px 13.3px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: brightness(130%);
  }
`;
