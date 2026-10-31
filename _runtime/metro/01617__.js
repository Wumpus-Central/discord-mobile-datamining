// _runtime/metro/01617__.js
import _mod1608 from "01608__.js";
import noop from "00019__.js";

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
