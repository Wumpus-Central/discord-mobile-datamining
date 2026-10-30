// _runtime/01534_ThemeProvider.js
import _mod1535 from "metro/01535__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1535.ThemeContext.Provider, { value, children });
}
