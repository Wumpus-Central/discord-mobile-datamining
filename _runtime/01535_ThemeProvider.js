// _runtime/01535_ThemeProvider.js
import _mod1536 from "metro/01536__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1536.ThemeContext.Provider, { value, children });
}
