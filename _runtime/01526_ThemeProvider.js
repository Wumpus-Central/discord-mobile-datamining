// _runtime/01526_ThemeProvider.js
import Fragment from "react/00021_Fragment.js";
import react2 from "01527_react.js";
import react from "00019_react.js";

const jsx = Fragment.jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(react2.ThemeContext.Provider, { value, children });
};
