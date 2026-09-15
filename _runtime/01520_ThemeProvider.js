// _runtime/01520_ThemeProvider.js
import _mod1521 from "metro/01521__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1521.ThemeContext.Provider, { value, children });
};
