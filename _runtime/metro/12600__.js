// _runtime/metro/12600__.js
import _mod12572 from "12572__.js";

export const handleCallbackErrors = function handleCallbackErrors(fn, fn2) {
  function maybeHandlePromiseRejection(promise, fn2, fn) {
    let closure_0 = fn2;
    let closure_1 = fn;
    const obj = _mod12572;
    if (obj.isThenable(promise)) {
      return promise.then(
        (result) => {
          closure_1();
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
      return promise;
    }
  }
  fn = arg2;
  if (arg2 === undefined) {
    fn = function t() {};
  }
  try {
    return maybeHandlePromiseRejection(fn(), fn2, fn);
  } catch (tmp2) {
    fn2(tmp2);
    fn();
    throw tmp2;
  }
};
