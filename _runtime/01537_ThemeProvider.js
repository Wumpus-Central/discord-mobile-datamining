// === Module 1537: ThemeProvider ===

// Module 1537 (ThemeProvider)
import _mod1538 from "module_1538" /* 1538 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1538.ThemeContext.Provider, { value, children });
}