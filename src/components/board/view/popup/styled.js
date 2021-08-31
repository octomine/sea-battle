import styled from "styled-components";
import { Box } from "../common/base/styled";

export const Underlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.53);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${({ visible }) => visible};
`;

export const ActionPlate = styled(Box)`
  visibility: inherit;
  transition: all 0.3s;
  margin: 20px;
  width: 120px;
  height: 150px;

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

export const Label = styled.div`
  color: lightgrey;
  text-align: center;
  height: 20px;
  margin-bottom: 10px;
`;

export const ColorHolder = styled(Box)`
  width: 100px;
  height: 100px;
  transition: all 0.3s;
  background: green;
`;
