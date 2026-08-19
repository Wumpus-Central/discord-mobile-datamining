// === Module 7212: startDiceRoll ===

// Module 7212 (startDiceRoll)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  const obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};