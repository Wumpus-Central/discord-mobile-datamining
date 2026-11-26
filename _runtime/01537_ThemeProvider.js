// _runtime/01537_ThemeProvider.js
import _mod1538 from "metro/01538__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1538.ThemeContext.Provider, { value, children });
}
