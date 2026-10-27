// === Module 915: ? ===

// Module 915
import _mod913 from "module_913" /* 913 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addPageListener = function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod913.WINDOW.document) {
    const WINDOW = _mod913.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
export const removePageListener = function removePageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod913.WINDOW.document) {
    const WINDOW = _mod913.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};