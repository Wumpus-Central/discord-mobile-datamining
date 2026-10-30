// _runtime/00915_whenIdleOrHidden.js
import _mod903 from "metro/00903__.js";

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export (fn) => {
  _require = fn;
  const _document = tmp(901).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    fn();
  } else {
    const runOnceResult = tmp(910).runOnce(fn);
    _require = runOnceResult;
    const tmpResult = tmp(910);
    tmp(903).addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult3 = tmp(903);
    tmp(903).addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      closure_0();
      _mod903.removePageListener("visibilitychange", closure_0, { capture: true });
      _mod903.removePageListener("pagehide", closure_0, { capture: true });
    });
    const tmpResult4 = tmp(903);
  }
  tmp3 = require("metro/00901__.js").WINDOW.requestIdleCallback || require("metro/00901__.js").WINDOW.setTimeout;
}