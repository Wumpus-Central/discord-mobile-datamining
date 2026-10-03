// === Module 914: whenActivated ===

// Module 914 (whenActivated)
import _mod915 from "module_915" /* 915 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const whenActivated = (fn) => {
  closure_0 = fn;
  const _document = _mod915.WINDOW.document;
  let prerendering;
  if (_document != null) {
    prerendering = _document.prerendering;
  }
  if (prerendering) {
    const listener = globalThis.addEventListener("prerenderingchange", () => closure_0(), true);
  } else {
    fn();
  }
};