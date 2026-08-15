// _runtime/01600_get_options.js
const obj = {};
Object.defineProperty(obj, "options", {
  get: () => {
    const error = new Error("Couldn't find a LinkingContext context.");
    throw error;
  },
  set: undefined
});
const context = require("noop").createContext(obj);
context.displayName = "LinkingContext";

export const LinkingContext = context;