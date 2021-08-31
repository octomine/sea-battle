import { createDomain } from "effector";

export const CELLS = 10;
export const CELL_SIZE = 50;

export const createBoard = ($ships, mode = "", isMine = false) => {
  const boardDomain = createDomain();

  const setMode = boardDomain.event();
  const cellClick = boardDomain.event();

  const explore = boardDomain.event();

  const $board = boardDomain
    .store(new Array(100).fill({ visible: isMine, isShip: false }, 0, 100))
    .on($ships, (state, ships) =>
      state.map(({ visible }, index) => ({
        visible,
        isShip: ships.includes(index),
      }))
    )
    .on(explore, (state, arr) =>
      state.map(({ isShip }, index) => ({
        visible: arr.includes(index),
        isShip,
      }))
    );

  const $mode = boardDomain.store(mode).on(setMode, (state, mode) => mode);

  return {
    $board,
    $mode,
    events: {
      setMode,
      cellClick,
      explore,
    },
  };
};
