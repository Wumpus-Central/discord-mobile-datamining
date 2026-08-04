// _runtime/01041_addPageListener.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addPageListener = function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (require(1039) /* WINDOW */.WINDOW.document) {
    const WINDOW = require(1039) /* WINDOW */.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
arg5.removePageListener = function removePageListener(pagehide, closure_0, arg2) {
  if (require(1039) /* WINDOW */.WINDOW.document) {
    const WINDOW = require(1039) /* WINDOW */.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, closure_0, arg2);
  }
};