import styled from "styled-components";
import { CELL_SIZE, CELLS } from "../../../../utils/createBoard";

export const Holder = styled.div`
  margin: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: ${CELL_SIZE * CELLS + CELLS - 1}px;
  height: ${CELL_SIZE * CELLS + CELLS}px;
`;

export const Cell = styled.div`
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  border-radius: 2px;
  background: ${({ visible, isShip }) => {
    if (visible) {
      return isShip ? "grey" : "LightSkyBlue";
    }
    return "LightGray";
  }};
`;
