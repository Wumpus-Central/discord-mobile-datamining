// === Module 1625: ? ===

// Module 1625
import _mod1616 from "module_1616" /* 1616 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useLocale = function useLocale() {
  const context = noop.useContext(_mod1616.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: context };
    return obj;
  }
};