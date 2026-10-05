// _runtime/00914_whenActivated.js
import _mod915 from "metro/00915__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const whenActivated = (fn) => {
  let closure_0 = fn;
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
