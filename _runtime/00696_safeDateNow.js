// === Module 696: safeDateNow ===

// Module 696 (safeDateNow)
import _mod686 from "module_686" /* 686 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const safeDateNow = function safeDateNow() {
  const fn = () => Date.now();
  if (undefined !== c2) {
    if (tmp) {
      let timestamp = tmp(fn);
    } else {
      const _Date2 = Date;
      timestamp = Date.now();
    }
  } else {
    const _Symbol = Symbol;
    const forResult = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    const GLOBAL_OBJ = _mod686.GLOBAL_OBJ;
    if (forResult in GLOBAL_OBJ) {
      if (typeof GLOBAL_OBJ[forResult] === "function") {
        c2 = tmp8;
        let timestamp1 = tmp8(fn);
      }
      return timestamp1;
    }
    c2 = null;
    const _Date = Date;
    timestamp1 = Date.now();
  }
};
export const safeMathRandom = function safeMathRandom() {
  const fn = () => Math.random();
  if (undefined !== c2) {
    if (tmp) {
      let random = tmp(fn);
    } else {
      const _Math2 = Math;
      random = Math.random();
    }
  } else {
    const _Symbol = Symbol;
    const forResult = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    const GLOBAL_OBJ = _mod686.GLOBAL_OBJ;
    if (forResult in GLOBAL_OBJ) {
      if (typeof GLOBAL_OBJ[forResult] === "function") {
        c2 = tmp8;
        let random1 = tmp8(fn);
      }
      return random1;
    }
    c2 = null;
    const _Math = Math;
    random1 = Math.random();
  }
};
export const withRandomSafeContext = function withRandomSafeContext(fn) {
  if (undefined !== c2) {
    return tmp ? tmp(fn) : fn();
  } else {
    const _Symbol = Symbol;
    const forResult = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    const GLOBAL_OBJ = _mod686.GLOBAL_OBJ;
    if (forResult in GLOBAL_OBJ) {
      if (typeof GLOBAL_OBJ[forResult] === "function") {
        c2 = tmp8;
        let tmp8Result = tmp8(fn);
      }
      return tmp8Result;
    }
    c2 = null;
    tmp8Result = fn();
  }
};