// _runtime/01533_ThemeProvider.js
import _mod1534 from "metro/01534__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1534.ThemeContext.Provider, { value, children });
}
