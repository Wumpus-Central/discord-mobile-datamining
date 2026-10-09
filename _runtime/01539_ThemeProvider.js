// === Module 1539: ThemeProvider ===

// Module 1539 (ThemeProvider)
import _mod1540 from "module_1540" /* 1540 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1540.ThemeContext.Provider, { value, children });
};