// === Module 1035: whenActivated ===

// Module 1035 (whenActivated)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.whenActivated = (arg0) => {
  const _require = arg0;
  const _document = _require(1036).WINDOW.document;
  let prerendering;
  if (_document != null) {
    prerendering = _document.prerendering;
  }
  if (prerendering) {
    const listener = globalThis.addEventListener("prerenderingchange", () => callback(), true);
  } else {
    arg0();
  }
};