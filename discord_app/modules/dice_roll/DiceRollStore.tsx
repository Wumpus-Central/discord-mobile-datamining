// discord_app/modules/dice_roll/DiceRollStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

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