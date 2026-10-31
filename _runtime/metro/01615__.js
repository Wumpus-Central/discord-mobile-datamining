// _runtime/metro/01615__.js
import noop from "00019__.js";

const context = noop.createContext({
  lastUnhandledLink: "Array",
  setLastUnhandledLink() {},
});
context.displayName = "UnhandledLinkingContext";

export const UnhandledLinkingContext = context;
