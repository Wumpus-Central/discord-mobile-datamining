// _runtime/01539_ThemeProvider.js
import _mod1540 from "metro/01540__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1540.ThemeContext.Provider, { value, children });
};
