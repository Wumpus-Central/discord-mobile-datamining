// _runtime/01537_context.js
import noopAll from "noop" /* 19 */;

const context = noopAll.createContext(undefined);
context.displayName = "ThemeContext";

export const ThemeContext = context;