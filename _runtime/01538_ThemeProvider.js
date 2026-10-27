// === Module 1538: ThemeProvider ===

// Module 1538 (ThemeProvider)
import _mod1539 from "module_1539" /* 1539 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1539.ThemeContext.Provider, { value, children });
};