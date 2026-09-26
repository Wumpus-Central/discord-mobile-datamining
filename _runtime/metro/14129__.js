// === Module 14129: ? ===

// Module 14129
import _modDef14127 from "module_14127" /* 14127 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14127);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};