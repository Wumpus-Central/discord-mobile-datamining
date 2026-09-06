// === Module 918: whenIdleOrHidden ===

// Module 918 (whenIdleOrHidden)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.whenIdleOrHidden = (arg0) => {
  let _require = arg0;
  const _document = tmp(904).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    arg0();
  } else {
    let tmpResult = tmp(913);
    const runOnceResult = tmpResult.runOnce(arg0);
    _require = runOnceResult;
    tmpResult = tmp(906);
    tmpResult.addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    tmp(906).addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      callback();
      callback(closure_1_1[2]).removePageListener("visibilitychange", callback, { capture: true });
      const obj = callback(closure_1_1[2]);
      callback(closure_1_1[2]).removePageListener("pagehide", callback, { capture: true });
    });
    const tmpResult1 = tmp(906);
  }
};