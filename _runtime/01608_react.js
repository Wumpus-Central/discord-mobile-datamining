// _runtime/01608_react.js
import react from "00019_react.js";

const obj = {
  lastUnhandledLink: "Array",
  setLastUnhandledLink() {},
};
const context = react.createContext(obj);
context.displayName = "UnhandledLinkingContext";

export const UnhandledLinkingContext = context;
