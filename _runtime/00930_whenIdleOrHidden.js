// === Module 930: whenIdleOrHidden ===

// Module 930 (whenIdleOrHidden)
import _mod918 from "module_918" /* 918 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const whenIdleOrHidden = (fn) => {
  _require = fn;
  const _document = tmp(916).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    fn();
  } else {
    const runOnceResult = tmp(925).runOnce(fn);
    _require = runOnceResult;
    const tmpResult = tmp(925);
    tmp(918).addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult3 = tmp(918);
    tmp(918).addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      closure_0();
      _mod918.removePageListener("visibilitychange", closure_0, { capture: true });
      _mod918.removePageListener("pagehide", closure_0, { capture: true });
    });
    const tmpResult4 = tmp(918);
  }
  tmp3 = require("module_916").WINDOW.requestIdleCallback || require("module_916").WINDOW.setTimeout;
};