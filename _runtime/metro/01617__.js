// === Module 1617: ? ===

// Module 1617
import _mod1608 from "module_1608" /* 1608 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useLocale() {
  const context = noop.useContext(_mod1608.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: context };
    return obj;
  }
}