// === Module 1536: ThemeProvider ===

// Module 1536 (ThemeProvider)
import noopAll from "noop" /* 19 */;
import context from "context" /* 1537 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(context.ThemeContext.Provider, { value, children });
};