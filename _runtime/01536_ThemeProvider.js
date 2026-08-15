// _runtime/01536_ThemeProvider.js
import "noop";
import { jsx } from "jsxProd";
import { context } from "01537_context.js";

const require = arg1;

export const ThemeProvider = function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(context.ThemeContext.Provider, { value, children });
};