// _runtime/01600_get_options.js
import noopAll from "noop" /* 19 */;

const obj = {};
Object.defineProperty(obj, "options", {
  get: () => {
    error = new Error("Couldn't find a LinkingContext context.");
    throw error;
  },
  set: undefined
});
const context = noopAll.createContext(obj);
context.displayName = "LinkingContext";

export const LinkingContext = context;