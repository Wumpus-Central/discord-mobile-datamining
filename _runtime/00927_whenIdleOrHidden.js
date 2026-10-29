// === Module 927: whenIdleOrHidden ===

// Module 927 (whenIdleOrHidden)
import _mod915 from "module_915" /* 915 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export (fn) => {
  _require = fn;
  const _document = tmp(913).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    fn();
  } else {
    const runOnceResult = tmp(922).runOnce(fn);
    _require = runOnceResult;
    const tmpResult = tmp(922);
    tmp(915).addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult3 = tmp(915);
    tmp(915).addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      closure_0();
      _mod915.removePageListener("visibilitychange", closure_0, { capture: true });
      _mod915.removePageListener("pagehide", closure_0, { capture: true });
    });
    const tmpResult4 = tmp(915);
  }
  tmp3 = require("module_913").WINDOW.requestIdleCallback || require("module_913").WINDOW.setTimeout;
}