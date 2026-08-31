// === Module 1535: ThemeProvider ===

// Module 1535 (ThemeProvider)
import noopAll from "noop" /* 19 */;
import context from "context" /* 1536 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(context.ThemeContext.Provider, { value, children });
};