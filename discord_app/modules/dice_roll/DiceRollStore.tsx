// === Module 12093: DiceRollStore ===

// Module 12093 (DiceRollStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const INITIAL_STATE = { channelId: null, rolling: false, dismissing: false, diceCount: 1, diceSides: 6, results: null };
const obj2 = module_560.create(() => obj);
const result = size.fileFinishedImporting("modules/dice_roll/DiceRollStore.tsx");

export default obj2;
export { INITIAL_STATE };
export const useDiceRollState = function useDiceRollState(channelId) {
  closure_0 = channelId;
  return obj2((channelId) => {
    let tmp = null;
    if (channelId.channelId === closure_0) {
      tmp = channelId;
    }
    return tmp;
  });
};