// _runtime/01536_context.js
const context = require("noop").createContext(undefined);
context.displayName = "ThemeContext";

export const ThemeContext = context;