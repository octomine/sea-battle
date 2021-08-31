import React from "react";

import { Box, TextLabel } from "../common/base/styled";
import { ActionPlate, Label, ColorHolder } from "./styled";
import {
  actionExplore,
  actionAttack,
  actionMove,
} from "../../model/popup/state";
import "../../model/popup/init";

const labels = ["Разведка", "Удар", "Перемещение"];
const events = [actionExplore, actionAttack, actionMove];

export const ActionChoice = () => {
  const onActionClick = (n) => {
    events[n]();
  };

  return (
    <Box plate width="640px" height="480px">
      <TextLabel>Выберите действие</TextLabel>
      <Box dir="row">
        {labels.map((item, index) => (
          <ActionPlate plate onClick={() => onActionClick(index)}>
            <Label>{item}</Label>
            <ColorHolder></ColorHolder>
          </ActionPlate>
        ))}
      </Box>
    </Box>
  );
};
