// === Module 900: whenActivated ===

// Module 900 (whenActivated)
import _mod901 from "module_901" /* 901 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export (fn) => {
  closure_0 = fn;
  const _document = _mod901.WINDOW.document;
  let prerendering;
  if (_document != null) {
    prerendering = _document.prerendering;
  }
  if (prerendering) {
    const listener = globalThis.addEventListener("prerenderingchange", () => closure_0(), true);
  } else {
    fn();
  }
}