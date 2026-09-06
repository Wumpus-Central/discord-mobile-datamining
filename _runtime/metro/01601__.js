// _runtime/metro/01601__.js
import noop from "00019__.js";

const obj = {
  lastUnhandledLink: "Array",
  setLastUnhandledLink() {},
};
const context = noop.createContext(obj);
context.displayName = "UnhandledLinkingContext";

export const UnhandledLinkingContext = context;
