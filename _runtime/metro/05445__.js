// === Module 5445: ? ===

// Module 5445
import _modDef5420 from "module_5420" /* 5420 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5420);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};