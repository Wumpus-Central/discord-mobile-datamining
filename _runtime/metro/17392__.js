// === Module 17392: ? ===

// Module 17392
import _modDef17390 from "module_17390" /* 17390 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef17390);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};