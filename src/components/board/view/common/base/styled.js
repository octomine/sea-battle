import styled, { css } from "styled-components";

const plateCSS = css`
  border-radius: 4px;
  border: 1px solid lightgray;
  background: white;
  opacity: 0.87;
  box-shadow: 0 4px 11px 1px rgba(0, 0, 0, 0.59);
`;

export const Box = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ dir = "column" }) => dir};

  width: ${({ width = "100%" }) => width};
  height: ${({ height = "100%" }) => height};

  ${({ plate }) => (plate ? plateCSS : "")}
`;

export const TextLabel = styled.div`
  text-align: center;
  color: grey;
  font-size: 48px;
`;

export const TextArea = styled.div`
  font-family: Helvetica;
  text-align: center;
  color: grey;
  font-size: 28px;
  white-space: pre-wrap;
`;
