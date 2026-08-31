// === Module 1617: setLastUnhandledLink ===

// Module 1617 (setLastUnhandledLink)
import noopAll from "noop" /* 19 */;

const obj = { lastUnhandledLink: "Array", setLastUnhandledLink: 0 };
obj[1] = function setLastUnhandledLink() {

};
const context = noopAll.createContext(obj);
context.displayName = "UnhandledLinkingContext";

export const UnhandledLinkingContext = context;