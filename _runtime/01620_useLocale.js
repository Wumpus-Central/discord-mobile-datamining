// _runtime/01620_useLocale.js
import context2 from "01611_context.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const useLocale = function useLocale() {
  const context = React.useContext(context2.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: null };
    obj[0] = context;
    return obj;
  }
};