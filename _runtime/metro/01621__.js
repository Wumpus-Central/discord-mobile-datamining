// === Module 1621: ? ===

// Module 1621
import _mod1612 from "module_1612" /* 1612 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useLocale() {
  const context = noop.useContext(_mod1612.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: context };
    return obj;
  }
}