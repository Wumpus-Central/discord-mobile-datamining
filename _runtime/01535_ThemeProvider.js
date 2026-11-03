// === Module 1535: ThemeProvider ===

// Module 1535 (ThemeProvider)
import _mod1536 from "module_1536" /* 1536 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1536.ThemeContext.Provider, { value, children });
}