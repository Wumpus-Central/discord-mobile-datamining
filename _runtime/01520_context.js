// _runtime/01520_context.js
import noopAll from "00019_noop.js";

const context = noopAll.createContext(undefined);
context.displayName = "ThemeContext";

export const ThemeContext = context;
