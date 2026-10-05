// _runtime/00707_safeDateNow.js
import _mod697 from "metro/00697__.js";

let _null, c2;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const safeDateNow = function safeDateNow() {
  let timestamp1;
  const fn = () => Date.now();
  if (undefined !== c2) {
    let timestamp;
    if (c2) {
      timestamp = tmp(fn);
    } else {
      const _Date2 = Date;
      timestamp = Date.now();
    }
    timestamp1 = timestamp;
  } else {
    const _Symbol = Symbol;
    const forResult = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    const GLOBAL_OBJ = _mod697.GLOBAL_OBJ;
    if (forResult in GLOBAL_OBJ) {
      if (typeof GLOBAL_OBJ[forResult] === "function") {
        c2 = tmp8;
        timestamp1 = tmp8(fn);
      }
    }
    c2 = null;
    const _Date = Date;
    timestamp1 = Date.now();
  }
  return timestamp1;
};
export const safeMathRandom = function safeMathRandom() {
  let random1;
  const fn = () => Math.random();
  if (undefined !== c2) {
    let random;
    if (c2) {
      random = tmp(fn);
    } else {
      const _Math2 = Math;
      random = Math.random();
    }
    random1 = random;
  } else {
    const _Symbol = Symbol;
    const forResult = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    const GLOBAL_OBJ = _mod697.GLOBAL_OBJ;
    if (forResult in GLOBAL_OBJ) {
      if (typeof GLOBAL_OBJ[forResult] === "function") {
        c2 = tmp8;
        random1 = tmp8(fn);
      }
    }
    c2 = null;
    const _Math = Math;
    random1 = Math.random();
  }
  return random1;
};
export const withRandomSafeContext = function withRandomSafeContext(fn) {
  if (undefined !== _null) {
    return _null ? _null(fn) : fn();
  } else {
    const _Symbol = Symbol;
    const forResult = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    const GLOBAL_OBJ = _mod697.GLOBAL_OBJ;
    if (forResult in GLOBAL_OBJ) {
      let tmp8Result;
      if (typeof GLOBAL_OBJ[forResult] === "function") {
        _null = tmp8;
        tmp8Result = tmp8(fn);
      }
      return tmp8Result;
    }
    _null = null;
    tmp8Result = fn();
  }
};
