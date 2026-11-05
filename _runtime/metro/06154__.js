// === Module 6154: ? ===

// Module 6154
import _modDef6129 from "module_6129" /* 6129 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef6129);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};