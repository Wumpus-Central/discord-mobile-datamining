// === Module 1610: react ===

// Module 1610 (react)
import react2 from "react" /* 1601 */;
import react from "react" /* 19 */;


export const useLocale = function useLocale() {
  const context = react.useContext(react2.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    return { direction: context };
  }
};