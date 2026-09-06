// _runtime/01583_get_options.js
import noop from "metro/00019__.js";

const obj = {};
Object.defineProperty(obj, "options", {
  get: () => {
    const error = new Error("Couldn't find a LinkingContext context.");
    throw error;
  },
  set: undefined,
});
const context = noop.createContext(obj);
context.displayName = "LinkingContext";

export const LinkingContext = context;
