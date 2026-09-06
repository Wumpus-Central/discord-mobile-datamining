// _runtime/metro/00906__.js
import _mod904 from "00904__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addPageListener = function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod904.WINDOW.document) {
    const WINDOW = _mod904.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
export const removePageListener = function removePageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod904.WINDOW.document) {
    const WINDOW = _mod904.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
