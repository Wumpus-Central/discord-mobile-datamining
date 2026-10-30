// === Module 1618: ? ===

// Module 1618
import _mod1609 from "module_1609" /* 1609 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useLocale() {
  const context = noop.useContext(_mod1609.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: context };
    return obj;
  }
}