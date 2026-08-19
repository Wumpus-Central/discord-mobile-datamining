// === Module 1620: useLocale ===

// Module 1620 (useLocale)
import context2 from "context" /* 1611 */;
import closure_2 from "noop" /* 19 */;

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