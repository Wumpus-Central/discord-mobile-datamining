// === Module 6751: DiceRollActionCreators ===

// Module 6751 (DiceRollActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj2);
};