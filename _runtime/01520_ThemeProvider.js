// === Module 1520: ThemeProvider ===

// Module 1520 (ThemeProvider)
import _mod1521 from "module_1521" /* 1521 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1521.ThemeContext.Provider, { value, children });
};