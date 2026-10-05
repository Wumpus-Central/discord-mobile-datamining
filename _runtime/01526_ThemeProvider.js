// === Module 1526: ThemeProvider ===

// Module 1526 (ThemeProvider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 1527 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(react2.ThemeContext.Provider, { value, children });
};