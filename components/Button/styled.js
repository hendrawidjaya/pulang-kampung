import styled from "styled-components";

export const BUTTON = styled.button`
  background: ${(props) => props.background || "yellow"};
  border-radius: 3px;
`;
