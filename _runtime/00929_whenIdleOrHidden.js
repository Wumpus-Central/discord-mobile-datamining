// === Module 929: whenIdleOrHidden ===

// Module 929 (whenIdleOrHidden)
import _mod917 from "module_917" /* 917 */;

const require = globalThis.__r;
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const whenIdleOrHidden = (fn) => {
  _require = fn;
  const tmp3 = require("module_915").WINDOW.requestIdleCallback || require("module_915").WINDOW.setTimeout;
  const _document = tmp(915).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    fn();
  } else {
    const tmpResult = require("runOnce");
    const runOnceResult = tmpResult.runOnce(fn);
    _require = runOnceResult;
    const tmpResult3 = require("module_917");
    tmpResult3.addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult4 = require("module_917");
    tmpResult4.addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      fn();
      const obj = _mod917;
      obj.removePageListener("visibilitychange", fn, { capture: true });
      const obj2 = _mod917;
      obj2.removePageListener("pagehide", fn, { capture: true });
    });
  }
};