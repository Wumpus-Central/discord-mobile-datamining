// _runtime/01536_ThemeProvider.js
import noopAll from "00019_noop.js";
import context from "01537_context.js";
import { jsx } from "react/00021_jsxProd.js";

require = arg1;
noopAll;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(context.ThemeContext.Provider, { value, children });
};