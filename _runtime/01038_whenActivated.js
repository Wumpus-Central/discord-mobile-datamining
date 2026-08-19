// _runtime/01038_whenActivated.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.whenActivated = (fn) => {
  const _require = fn;
  const _document = require("01039_WINDOW.js").WINDOW.document;
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