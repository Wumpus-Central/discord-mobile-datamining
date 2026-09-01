// _runtime/00831_safeDateNow.js
import _mod821 from "metro/00821__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.safeDateNow = function safeDateNow() {
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
    const GLOBAL_OBJ = _mod821.GLOBAL_OBJ;
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
arg5.safeMathRandom = function safeMathRandom() {
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
    const GLOBAL_OBJ = _mod821.GLOBAL_OBJ;
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
arg5.withRandomSafeContext = function withRandomSafeContext(arg0) {
  if (undefined !== c2) {
    return tmp ? tmp(arg0) : arg0();
  } else {
    const _Symbol = Symbol;
    const forResult = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    const GLOBAL_OBJ = _mod821.GLOBAL_OBJ;
    if (forResult in GLOBAL_OBJ) {
      if (typeof GLOBAL_OBJ[forResult] === "function") {
        c2 = tmp8;
        let tmp8Result = tmp8(arg0);
      }
      return tmp8Result;
    }
    c2 = null;
    tmp8Result = arg0();
  }
};
