// === Module 7605: DiceRollActionCreators ===

// Module 7605 (DiceRollActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export function startDiceRoll(channelId, diceCount, diceSides) {
  DispatcherDefault.dispatch({ type: "DICE_ROLL_START", channelId, diceCount, diceSides });
}