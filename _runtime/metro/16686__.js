// === Module 16686: ? ===

// Module 16686
import _modDef16684 from "module_16684" /* 16684 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef16684);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};