// === Module 1038: addPageListener ===

// Module 1038 (addPageListener)
import WINDOW2 from "WINDOW" /* 1036 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addPageListener = function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (WINDOW2.WINDOW.document) {
    const WINDOW = WINDOW2.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
arg5.removePageListener = function removePageListener(pagehide, closure_0, arg2) {
  if (WINDOW2.WINDOW.document) {
    const WINDOW = WINDOW2.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, closure_0, arg2);
  }
};