// _runtime/metro/00903__.js
import _mod901 from "00901__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod901.WINDOW.document) {
    const WINDOW = _mod901.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
}
export function removePageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod901.WINDOW.document) {
    const WINDOW = _mod901.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, onVisibilityUpdate, arg2);
  }
}
