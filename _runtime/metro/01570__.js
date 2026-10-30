// === Module 1570: ? ===

// Module 1570
import _mod1535 from "module_1535" /* 1535 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useTheme() {
  const context = noop.useContext(_mod1535.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
}