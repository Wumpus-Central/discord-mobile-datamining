// _runtime/metro/01625__.js
import _mod1616 from "01616__.js";
import noop from "00019__.js";

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
