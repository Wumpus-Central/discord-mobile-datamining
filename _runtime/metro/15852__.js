// === Module 15852: ? ===

// Module 15852
import _modDef15850 from "module_15850" /* 15850 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef15850);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};