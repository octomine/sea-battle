import styled from "styled-components";

export const Button = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 256px;
  height: 70px;
  border-radius: 2px;
  background: LightSkyBlue;
  border: 1px solid lightgray;
  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.39);

  p {
    font-family: Helvetica;
    color: white;
    font-size: 28px;
    text-shadow: 0 0 1px grey;
    font-weight: bold;
  }

  &:active {
    transform: translateY(3px);
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.69);
  }
`;
