// === Module 1610: ? ===

// Module 1610
import _mod1601 from "module_1601" /* 1601 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useLocale = function useLocale() {
  const context = noop.useContext(_mod1601.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: context };
    return obj;
  }
};