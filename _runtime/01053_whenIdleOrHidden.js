// _runtime/01053_whenIdleOrHidden.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.whenIdleOrHidden = (fn) => {
  let _require = fn;
  const _document = tmp(1039).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    fn();
  } else {
    let tmpResult = tmp(1048);
    const runOnceResult = tmpResult.runOnce(fn);
    _require = runOnceResult;
    tmpResult = tmp(1041);
    tmpResult.addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    tmp(1041).addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      callback();
      callback(dependencyMap[2]).removePageListener("visibilitychange", callback, { capture: true });
      const obj = callback(dependencyMap[2]);
      callback(dependencyMap[2]).removePageListener("pagehide", callback, { capture: true });
    });
    const tmpResult1 = tmp(1041);
  }
  tmp3 = require("01039_WINDOW.js").WINDOW.requestIdleCallback || require("01039_WINDOW.js").WINDOW.setTimeout;
};