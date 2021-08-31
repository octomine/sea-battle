import React from "react";

import { Holder, Cell } from "./styled";

export const Board = ({ boardState, cellClick }) => {
  return (
    <Holder>
      {boardState.map(({ visible, isShip }, index) => (
        <Cell
          key={index}
          visible={visible}
          isShip={isShip}
          onClick={() => cellClick(index)}
        ></Cell>
      ))}
    </Holder>
  );
};
