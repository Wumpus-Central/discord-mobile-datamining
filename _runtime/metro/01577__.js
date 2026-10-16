// === Module 1577: ? ===

// Module 1577
import _mod1542 from "module_1542" /* 1542 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useTheme = function useTheme() {
  const context = noop.useContext(_mod1542.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
};