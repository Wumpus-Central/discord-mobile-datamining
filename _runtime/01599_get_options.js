// _runtime/01599_get_options.js
import noopAll from "00019_noop.js";

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