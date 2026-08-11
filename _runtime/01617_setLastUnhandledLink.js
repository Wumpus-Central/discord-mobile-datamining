// _runtime/01617_setLastUnhandledLink.js
const obj = { lastUnhandledLink: "Array", setLastUnhandledLink: 0 };
obj[1] = function setLastUnhandledLink() {

};
const context = require("noop").createContext(obj);
context.displayName = "UnhandledLinkingContext";

export const UnhandledLinkingContext = context;