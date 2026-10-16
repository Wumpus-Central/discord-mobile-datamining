// === Module 915: whenActivated ===

// Module 915 (whenActivated)
import _mod916 from "module_916" /* 916 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const whenActivated = (fn) => {
  closure_0 = fn;
  const _document = _mod916.WINDOW.document;
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