// _runtime/01519_ThemeProvider.js
import _mod1520 from "metro/01520__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1520.ThemeContext.Provider, { value, children });
};
