// discord_app/modules/dice_roll/DiceRollActionCreators.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  let obj = dispatcher;
  obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};