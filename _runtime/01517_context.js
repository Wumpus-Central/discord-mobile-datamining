// _runtime/01517_context.js
const context = require("noop").createContext(undefined);
context.displayName = "ThemeContext";

export const ThemeContext = context;