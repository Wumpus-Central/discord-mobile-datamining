// discord_app/modules/dice_roll/DiceRollStore.tsx
import react from "../../../_runtime/00576_react.js";
import 00570__ from "../../../_runtime/metro/00570__.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const INITIAL_STATE = { channelId: null, rolling: false, dismissing: false, diceCount: 1, diceSides: 6, results: null };
const obj2 = module_570.create(() => obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let closure_0 = arg0;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function t(channelId) {
      let tmp = null;
      if (channelId.channelId === closure_0) {
        tmp = channelId;
      }
      return tmp;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return obj2(tmp2);
}) : ((arg0) => {
  let closure_0 = arg0;
  return obj2((channelId) => {
    let tmp = null;
    if (channelId.channelId === closure_0) {
      tmp = channelId;
    }
    return tmp;
  });
});
const result = size.fileFinishedImporting("modules/dice_roll/DiceRollStore.tsx");

export default obj2;
export { INITIAL_STATE };
export const useDiceRollState = tmp3;