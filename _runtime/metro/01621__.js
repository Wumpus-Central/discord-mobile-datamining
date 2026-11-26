// _runtime/metro/01621__.js
import _mod1612 from "01612__.js";
import noop from "00019__.js";

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
