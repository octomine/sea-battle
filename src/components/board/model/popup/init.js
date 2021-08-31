import { merge, forward } from "effector";
import { actionExplore, actionAttack, actionMove, hidePopup } from "./state";

const actionEvents = merge([actionExplore, actionAttack, actionMove]);

forward({
  from: actionEvents,
  to: hidePopup,
});
