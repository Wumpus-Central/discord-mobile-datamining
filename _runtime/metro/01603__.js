// _runtime/metro/01603__.js
import _mod1594 from "01594__.js";
import noop from "00019__.js";

require = arg1;

export const useLocale = function useLocale() {
  const context = noop.useContext(_mod1594.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: context };
    return obj;
  }
};
