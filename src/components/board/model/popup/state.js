import { createStore, createEvent } from "effector";

export const showPopup = createEvent();
export const hidePopup = createEvent();

export const $visibility = createStore(false)
  .on(showPopup, () => true)
  .reset(hidePopup);

export const $isActionChoice = createStore(false).on(
  showPopup,
  (state, { isActionChoice }) => (isActionChoice ? true : false)
);

export const $labelText = createStore("")
  .on(showPopup, (state, { labelText = "" }) => labelText)
  .reset(hidePopup);

export const $leftButtonLabel = createStore("").on(
  showPopup,
  (state, { leftButtonLabel }) => leftButtonLabel
);

export const $rightButtonLabel = createStore("").on(
  showPopup,
  (state, { rightButtonLabel }) => rightButtonLabel
);

export const $leftButtonClick = createStore(null).on(
  showPopup,
  (state, { leftButtonClick }) => leftButtonClick
);

export const $rightButtonClick = createStore(null).on(
  showPopup,
  (state, { rightButtonClick }) => rightButtonClick
);

export const actionExplore = createEvent();
export const actionAttack = createEvent();
export const actionMove = createEvent();
