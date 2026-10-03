// === Module 5765: ? ===

// Module 5765
import _modDef5740 from "module_5740" /* 5740 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5740);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};