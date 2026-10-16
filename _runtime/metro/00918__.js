// _runtime/metro/00918__.js
import _mod916 from "00916__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addPageListener = function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod916.WINDOW.document) {
    const WINDOW = _mod916.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
export const removePageListener = function removePageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod916.WINDOW.document) {
    const WINDOW = _mod916.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
