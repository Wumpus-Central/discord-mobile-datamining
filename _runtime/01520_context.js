// === Module 1520: context ===

// Module 1520 (context)
import noopAll from "noop" /* 19 */;

const context = noopAll.createContext(undefined);
context.displayName = "ThemeContext";

export const ThemeContext = context;