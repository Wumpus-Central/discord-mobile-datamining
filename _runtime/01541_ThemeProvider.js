// === Module 1541: ThemeProvider ===

// Module 1541 (ThemeProvider)
import _mod1542 from "module_1542" /* 1542 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1542.ThemeContext.Provider, { value, children });
};