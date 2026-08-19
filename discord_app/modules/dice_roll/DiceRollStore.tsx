// === Module 11146: INITIAL_STATE ===

// Module 11146 (INITIAL_STATE)
import obj132 from "obj132" /* 2 */;
import keys from "keys" /* 644 */;

const obj = keys.create(() => obj);
const result = obj132.fileFinishedImporting("modules/dice_roll/DiceRollStore.tsx");

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