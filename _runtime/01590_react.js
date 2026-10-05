// _runtime/01590_react.js
import react from "00019_react.js";

const obj = {};
const createContext = react.createContext;
Object.defineProperty(obj, "options", {
  get: () => {
    const error = new Error("Couldn't find a LinkingContext context.");
    throw error;
  },
  set: undefined,
});
const context = createContext(obj);
context.displayName = "LinkingContext";

export const LinkingContext = context;
