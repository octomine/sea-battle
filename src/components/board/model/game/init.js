import { createBoard, CELLS } from "../../../../utils/createBoard";
import { sample, createStore, createEvent, forward } from "effector";
import { showPopup, actionExplore } from "../popup/state";

const generateShips = (max) => {
  let res = [];
  while (res.length < max) {
    const num = Math.floor(Math.random() * 100);
    if (!res.includes(num)) {
      res = [...res, num];
    }
  }
  return res;
};

const SHIP_NUM = 4;

const MODE_ADD_SHIP = "addShip";
const MODE_EXPLORE = "explore";

const beginTurn = createEvent();

// *** MINE ***

const addMyShip = createEvent();
const setMyShips = createEvent();
const $myShips = createStore([])
  .on(setMyShips, () => generateShips(SHIP_NUM))
  .on(addMyShip, (state, next) => {
    if (state.includes(next)) {
      return state.filter((item) => item !== next);
    }
    if (state.length >= SHIP_NUM) {
      return [...state];
    }
    return [...state, next];
  });

$myShips.updates.watch((ships) => {
  if (ships.length >= SHIP_NUM) {
    showPopup({
      labelText: "Начать игру?",
      leftButtonLabel: "Нет",
      leftButtonClick: null,
      rightButtonLabel: "Да",
      rightButtonClick: beginTurn,
    });
  }
});

export const {
  $board: $myBoard,
  $mode: $myMode,
  events: { cellClick: myClick, setMode: setMyMode },
} = createBoard($myShips, MODE_ADD_SHIP, true);

forward({
  from: beginTurn,
  to: [
    setMyMode.prepend(() => ""),
    showPopup.prepend(() => ({
      isActionChoice: true,
    })),
  ],
});

// *** ENEMY ***

const setEnemyShips = createEvent();
const $enemyShips = createStore([]).on(setEnemyShips, () =>
  generateShips(SHIP_NUM)
);

export const {
  $board: $enemyBoard,
  $mode: $enemyMode,
  events: { cellClick: enemyClick, explore, setMode: setEnemyMode },
} = createBoard($enemyShips, "");

sample($myMode, myClick, (mode, num) => ({ mode, num })).watch(
  ({ mode, num }) => {
    switch (mode) {
      case MODE_ADD_SHIP:
        addMyShip(num);
        break;
      default:
    }
  }
);

sample($enemyMode, enemyClick, (mode, num) => ({
  mode,
  num,
})).watch(({ mode, num }) => {
  switch (mode) {
    case MODE_EXPLORE:
      const contestee = Math.floor(num / CELLS);
      let res = [num];
      for (let i = -1; i <= 1; i += 1) {
        for (let j = -1; j <= 1; j += 1) {
          if (Math.floor((num + i) / CELLS) === contestee) {
            res = [...res, num + i + j * CELLS];
          }
        }
      }
      explore(res);
      break;
    default:
  }
});

setEnemyShips();

showPopup({
  labelText: [
    `Для того, что бы расставить`,
    `корабли автоматически,`,
    `нажмите 'Автоматом',`,
    `что бы расставить руками,`,
    `нажмите 'Руками'`,
  ].join("\n"),
  leftButtonLabel: "Автоматом",
  rightButtonLabel: "Руками",
  leftButtonClick: setMyShips,
});

forward({
  from: actionExplore,
  to: setEnemyMode.prepend(() => MODE_EXPLORE),
});
