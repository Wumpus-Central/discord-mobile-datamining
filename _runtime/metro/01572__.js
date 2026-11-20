// === Module 1572: ? ===

// Module 1572
import _mod1537 from "module_1537" /* 1537 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useTheme() {
  const context = noop.useContext(_mod1537.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
}