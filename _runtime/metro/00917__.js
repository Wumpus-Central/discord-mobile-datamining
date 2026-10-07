// === Module 917: ? ===

// Module 917
import _mod915 from "module_915" /* 915 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addPageListener = function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod915.WINDOW.document) {
    const WINDOW = _mod915.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
export const removePageListener = function removePageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod915.WINDOW.document) {
    const WINDOW = _mod915.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};