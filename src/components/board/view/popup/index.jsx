import React from "react";
import { useStore } from "effector-react";

import {
  $labelText,
  $leftButtonLabel,
  $rightButtonLabel,
  $visibility,
  $leftButtonClick,
  hidePopup,
  $rightButtonClick,
  $isActionChoice,
} from "../../model/popup/state";
import { Underlay } from "./styled";
import { Button } from "../common/button/styled";
import { Box, TextArea } from "../common/base/styled";
import { ActionChoice } from "./action-choice";

export const Popup = () => {
  const visibility = useStore($visibility);
  const isActionChoice = useStore($isActionChoice);
  const labelText = useStore($labelText);
  const leftButtonLabel = useStore($leftButtonLabel);
  const rightButtonLabel = useStore($rightButtonLabel);

  const leftButtonClick = useStore($leftButtonClick);
  const onLeftClick = () => {
    hidePopup();
    if (leftButtonClick) {
      leftButtonClick();
    }
  };

  const rightButtonClick = useStore($rightButtonClick);
  const onRightClick = () => {
    hidePopup();
    if (rightButtonClick) {
      rightButtonClick();
    }
  };

  return visibility ? (
    <Underlay>
      {isActionChoice ? (
        <ActionChoice></ActionChoice>
      ) : (
        <Box width="640px">
          <Box width="530px" height="300px" plate>
            <TextArea>{labelText}</TextArea>
          </Box>
          <Box dir="row" height="100px">
            <Button onClick={onLeftClick}>
              <p>{leftButtonLabel}</p>
            </Button>
            <Button onClick={onRightClick}>
              <p>{rightButtonLabel}</p>
            </Button>
          </Box>
        </Box>
      )}
    </Underlay>
  ) : null;
};
