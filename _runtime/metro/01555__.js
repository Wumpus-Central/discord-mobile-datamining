// === Module 1555: ? ===

// Module 1555
import _mod1520 from "module_1520" /* 1520 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useTheme = function useTheme() {
  const context = noop.useContext(_mod1520.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
};