// _runtime/00903_whenActivated.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.whenActivated = (arg0) => {
  const _require = arg0;
  const _document = require("00904_WINDOW.js").WINDOW.document;
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
