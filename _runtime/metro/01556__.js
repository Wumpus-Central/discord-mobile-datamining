// === Module 1556: ? ===

// Module 1556
import _mod1521 from "module_1521" /* 1521 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useTheme = function useTheme() {
  const context = noop.useContext(_mod1521.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
};