// === Module 1562: react ===

// Module 1562 (react)
import react2 from "react" /* 1527 */;
import react from "react" /* 19 */;


export const useTheme = function useTheme() {
  const context = react.useContext(react2.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
};