// === Module 1571: ? ===

// Module 1571
import _mod1536 from "module_1536" /* 1536 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useTheme() {
  const context = noop.useContext(_mod1536.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
}