// _runtime/metro/00743__.js
import _mod703 from "00703__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const handleCallbackErrors = function handleCallbackErrors(fn, fn2) {
  function maybeHandlePromiseRejection(promise, fn2, fn, fn22) {
    let closure_0 = fn2;
    let closure_1 = fn;
    let closure_2 = fn2;
    const obj = _mod703;
    if (obj.isThenable(promise)) {
      return promise.then(
        (result) => {
          closure_1();
          closure_2(result);
          return result;
        },
        (arg0) => {
          closure_0(arg0);
          closure_1();
          throw arg0;
        },
      );
    } else {
      fn();
      fn2(promise);
      return promise;
    }
  }
  fn = arg2;
  if (arg2 === undefined) {
    fn = function t() {};
  }
  fn2 = arg3;
  if (arg3 === undefined) {
    fn2 = function o() {};
  }
  try {
    const tmp2 = fn();
    return maybeHandlePromiseRejection(tmp2, fn2, fn, fn2);
  } catch (tmp7) {
    fn2(tmp7);
    fn();
    throw tmp7;
  }
};
