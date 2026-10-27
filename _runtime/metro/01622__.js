// _runtime/metro/01622__.js
import _mod1613 from "01613__.js";
import noop from "00019__.js";

require = arg1;

export const useLocale = function useLocale() {
  const context = noop.useContext(_mod1613.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: context };
    return obj;
  }
};
