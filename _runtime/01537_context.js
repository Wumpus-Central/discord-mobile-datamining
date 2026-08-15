// _runtime/01537_context.js
const context = require("noop").createContext(undefined);
context.displayName = "ThemeContext";

export const ThemeContext = context;