// _runtime/01620_useLocale.js
import noop from "noop";
import { context } from "01611_context.js";

const require = arg1;

export const useLocale = function useLocale() {
  const context = React.useContext(context.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: null };
    obj[0] = context;
    return obj;
  }
};