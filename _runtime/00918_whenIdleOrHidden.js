// === Module 918: whenIdleOrHidden ===

// Module 918 (whenIdleOrHidden)
import _mod906 from "module_906" /* 906 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const whenIdleOrHidden = (fn) => {
  _require = fn;
  const _document = tmp(904).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    fn();
  } else {
    const runOnceResult = tmp(913).runOnce(fn);
    _require = runOnceResult;
    const tmpResult = tmp(913);
    tmp(906).addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult3 = tmp(906);
    tmp(906).addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      closure_0();
      _mod906.removePageListener("visibilitychange", closure_0, { capture: true });
      _mod906.removePageListener("pagehide", closure_0, { capture: true });
    });
    const tmpResult4 = tmp(906);
  }
  tmp3 = require("module_904").WINDOW.requestIdleCallback || require("module_904").WINDOW.setTimeout;
};