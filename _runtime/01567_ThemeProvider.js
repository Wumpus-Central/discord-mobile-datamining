import { context } from "01568_context.js";
// _runtime/01567_ThemeProvider.js
import "noop";
import { jsx } from "jsxProd";


export default function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(context.Provider, { value, children });
};