// === Module 1038: whenActivated ===

// Module 1038 (whenActivated)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.whenActivated = (fn) => {
  const _require = fn;
  const _document = _require(1039).WINDOW.document;
  let prerendering;
  if (_document != null) {
    prerendering = _document.prerendering;
  }
  if (prerendering) {
    const listener = globalThis.addEventListener("prerenderingchange", (event) => callback(), true);
  } else {
    fn();
  }
};