import React from "react";
import { Board } from "../board";
import { useStore } from "effector-react";
import {
  $myBoard,
  myClick,
  $enemyBoard,
  enemyClick,
} from "../../model/game/init";
import { Box } from "../common/base/styled";

export const Game = () => {
  return (
    <Box dir="row">
      <Board boardState={useStore($myBoard)} cellClick={myClick}></Board>
      <Board boardState={useStore($enemyBoard)} cellClick={enemyClick}></Board>
    </Box>
  );
};
