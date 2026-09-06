// === Module 11959: DiceRollStore ===

// Module 11959 (DiceRollStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let obj = { channelId: null, rolling: false, dismissing: false, diceCount: 1, diceSides: 6, results: null };
obj = module_560.create(() => obj);
const result = size.fileFinishedImporting("modules/dice_roll/DiceRollStore.tsx");

export default obj;
export const INITIAL_STATE = obj;
export const useDiceRollState = function useDiceRollState(channelId) {
  closure_0 = channelId;
  return obj((channelId) => {
    let tmp = null;
    if (channelId.channelId === closure_0) {
      tmp = channelId;
    }
    return tmp;
  });
};