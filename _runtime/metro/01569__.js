// === Module 1569: ? ===

// Module 1569
import _mod1534 from "module_1534" /* 1534 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useTheme() {
  const context = noop.useContext(_mod1534.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
}