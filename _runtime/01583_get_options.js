// === Module 1583: get options ===

// Module 1583 (get options)
import noop from "module_19" /* 19 */;

const obj = {};
Object.defineProperty(obj, "options", {
  get: () => {
    const error = new Error("Couldn't find a LinkingContext context.");
    throw error;
  },
  set: undefined
});
const context = noop.createContext(obj);
context.displayName = "LinkingContext";

export const LinkingContext = context;